import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useUserInfo() {
    return useQuery({
    queryKey: ["user/me"],
    queryFn: async () => {
      try{
        const response = await axios.get("/api/user/me");
        return response.data;
      }
      catch (error) {
        return null;
      }
      
    },
    
  });
}