import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { BASE_URL } from "../config";

export function useGetDoctors(query) {
  const { isPending, data: doctors } = useQuery({
    queryKey: ["doctors", query],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/doctors?query=${query}`,
          {
            withCredentials: true,
          },
        );
        console.log(response.data);
        return response?.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return { isPending, doctors };
}
