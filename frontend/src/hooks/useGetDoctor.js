import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { BASE_URL } from "../config";

export function useGetDoctor(id) {
  const { isPending, data: doctor } = useQuery({
    queryKey: ["doctor", id],
    queryFn: async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/doctors/${id}`, {
          withCredentials: true,
        });
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return { isPending, doctor };
}
