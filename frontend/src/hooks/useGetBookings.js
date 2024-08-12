import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";

export function useGetBookings() {
  const {
    isPending,
    data: bookings,
    refetch,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/api/users/appointments/my-appointments`,
          {
            withCredentials: true,
          },
        );
        // refetch();
        // console.log(data);
        return data;
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
        throw error;
      }
    },
  });
  return { isPending, bookings, refetch };
}
