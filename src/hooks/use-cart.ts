import { useQueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import useLocalstorage from "./use-localstorage";
import { toast } from "sonner";
import axios from "axios";

// Define a simplified cart item type that only stores essential data
type MinimalCartItem = {
  sku: string;
  quantity: number;
};

export default function useCart() {
  // Store only minimal cart data - sku and quantity
  const [cartItems, setCartItems] = useLocalstorage<MinimalCartItem[]>(
    "cart",
    []
  );
  const queryClient = useQueryClient();

  // Fetch fresh product data for all items in cart
  const {
    data: cartItemLocal,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cart-item-local"],
    initialData: cartItems,
    queryFn: async () => {
      return cartItems;
    },
  });

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
    // Invalidate the cart query to trigger a fresh fetch
  };

  // Update quantity function (no changes needed - already minimal)
  const increaseQuantity = (sku: string) => {
    if (!cartItemLocal) return;
    const newCartItems = cartItemLocal.map((item) =>
      item.sku === sku ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(newCartItems);
    queryClient.setQueryData(["cart-item-local"], newCartItems);
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
  };

  const removeFromCart = (sku: string) => {
    if (!cartItemLocal) return;
    const newCartItems = cartItemLocal.filter((item) => item.sku !== sku);
    toast("Đã xóa sản phẩm trong giỏ hàng");
    setCartItems(newCartItems);
    queryClient.setQueryData(["cart-item-local"], newCartItems);
  };

  return {
    cartItemLocal,
    isLoading,
    addToCart,
    increaseQuantity,
    removeFromCart,
    decreaseQuantity,
    refetchCart: refetch,
  };
}
