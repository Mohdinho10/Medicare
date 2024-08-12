import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { BASE_URL } from "../config";

export function useGetDoctorProfile() {
  const { isPending, data: doctorData } = useQuery({
    queryKey: ["doctor"],
    queryFn: async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/doctors/profile`, {
          withCredentials: true,
        });
        // setData(response.data);
        // refetch();
        // console.log(doctorData);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return { isPending, doctorData };
}
