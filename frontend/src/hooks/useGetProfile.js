import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { BASE_URL } from "../config";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

export function useGetProfile() {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const {
    isPending,
    data: userData,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/users/profile`, {
          withCredentials: true,
        });
        // setData(response.data);
        // refetch();
        return response.data;
      } catch (error) {
        console.log(error);
        if (
          error.response.data.message === "Not authorized, no token" ||
          error.response.data.message === "Not authorized, token failed"
        ) {
          setUser(null);
          navigate("/login", { replace: true });
        }
      }
    },
  });
  return { isPending, userData, refetch };
}
