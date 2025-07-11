import { useQuery } from "@tanstack/react-query";
import axios from "axios";



type UserInfo = {
  userId?: string;
  email?: string;
  displayname?: string;
  roles?: string[];
  phone?: string;
  address?: string;
};

export default function useUserInfo() {
  return useQuery({
    queryKey: ["auth/me"],
    queryFn: async () => {
      try {
        const response = await axios.get("/api/auth/me");
        return response.data.user as UserInfo;
      } catch  {
        return null;
      }
    },
  });
}
