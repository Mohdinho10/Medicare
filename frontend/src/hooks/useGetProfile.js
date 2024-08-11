import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { BASE_URL } from "../config";
// import { useState } from "react";

export function useGetProfile() {
  //   const [data, setData] = useState([]);

  const {
    isPending,
    data: userData,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const response = await axios.get(`${BASE_URL}/users/profile`, {
          withCredentials: true,
        });
        // setData(response.data);
        // refetch();
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return { isPending, userData, refetch };
}
