import { useQueryClient } from "@tanstack/react-query";
import { useQuery, useQueries } from "@tanstack/react-query";
import useLocalstorage from "./use-localstorage";
import { toast } from "sonner";
import axios from "axios";

// Define a simplified cart item type that only stores essential data
type MinimalCartItem = {
  sku: string;
  quantity: number;
};

type CartItemData = {
  sku: string;
  name: string;
  price: number;
  discountprice: number;
  color: string;
  colorCode: string;
  size: string;
  additionalprice: number;
  stockquantity: number;
  image: string;
  slug: string;
  productId: number;
  variantId: number;
  quantity: number; // Thêm quantity để theo dõi số lượng trong giỏ hàng
};

export default function useCart() {
  // Store only minimal cart data - sku and quantity
  const [cartItems, setCartItems] = useLocalstorage<MinimalCartItem[]>(
    "cart",
    []
  );
  const queryClient = useQueryClient();

  const { data: cartItemLocal } = useQuery({
    queryKey: ["cart-item-local"],
    initialData: cartItems,
    queryFn: async () => {
      return cartItems;
    },
  });

  const cartItemQueries = useQueries({
    queries: (cartItemLocal || []).map((item) => {
      return {
        queryKey: ["cart-item-data", item.sku],
        queryFn: async () => {
          try {
            const response = await axios.get(
              `/api/products/variant/${item.sku}`
            );
            return {
              ...response.data.variant,
              quantity: item.quantity,
            } as CartItemData;
          } catch (error) {
            console.error(`Error fetching item with SKU ${item.sku}:`, error);
            throw error;
          }
        },
        staleTime: 1000 * 60 * 5, // 5 phút
      };
    }),
  });

  // Kết hợp dữ liệu từ các queries
  const cartItemData = cartItemQueries
    .map((query) => query.data)
    .filter(Boolean);

  // Simplified addToCart that only needs sku and quantity
  const addToCart = (sku: string, quantity: number) => {
    if (!cartItemLocal) return;
    if (quantity <= 0) return;

    // Only store SKU and quantity
    const newCartItems = [...cartItemLocal];
    const existingItemIndex = newCartItems.findIndex(
      (cartItem) => cartItem.sku === sku
    );

    if (existingItemIndex !== -1) {
      // Update existing item quantity
      newCartItems[existingItemIndex] = {
        ...newCartItems[existingItemIndex],
        quantity: newCartItems[existingItemIndex].quantity + quantity,
      };
    } else {
      // Add new item with just SKU and quantity
      newCartItems.push({
        sku,
        quantity,
      });
    }

    toast("Đã thêm sản phẩm vào giỏ hàng");
    setCartItems(newCartItems);
    queryClient.setQueryData(["cart-item-local"], newCartItems);
    // Update the specific item data in the query cache

    // Invalidate the cart query to trigger a fresh fetch
  };

  // Update quantity function (no changes needed - already minimal)
  const increaseQuantity = (sku: string) => {
    if (!cartItemLocal) return;
    const newCartItems = cartItemLocal.map((item) =>
      item.sku === sku ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(newCartItems);
    queryClient.setQueryData(
      ["cart-item-data", sku],
      (oldData: CartItemData | undefined) => {
        if (!oldData) return oldData;
        return { ...oldData, quantity: oldData.quantity + 1 };
      }
    );
  };

  const decreaseQuantity = (sku: string) => {
    if (!cartItemLocal) return;
    const newCartItems = cartItemLocal.map((item) =>
      item.sku === sku
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    );

    setCartItems(newCartItems);
    queryClient.setQueryData(["cart-item-local"], newCartItems);
    queryClient.setQueryData(
      ["cart-item-data", sku],
      (oldData: CartItemData | undefined) => {
        if (!oldData) return oldData;
        return { ...oldData, quantity: Math.max(1, oldData.quantity - 1) };
      }
    );
  };

  const removeFromCart = (sku: string) => {
    if (!cartItemLocal) return;
    const newCartItems = cartItemLocal.filter((item) => item.sku !== sku);
    toast("Đã xóa sản phẩm trong giỏ hàng");
    setCartItems(newCartItems);
    queryClient.setQueryData(["cart-item-local"], newCartItems);
    queryClient.removeQueries({ queryKey: ["cart-item-data", sku] });
  };

  return {
    cartItemLocal,
    cartItemData,
    addToCart,
    increaseQuantity,
    removeFromCart,
    decreaseQuantity,
  };
}
