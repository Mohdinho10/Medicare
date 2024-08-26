import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import axios from "axios";
import { BASE_URL } from "../config";
import { useUser } from "../context/UserContext";

export function useUpdateUser() {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const queryClient = useQueryClient();

  const { mutate: updatedUser, isPending: isUpdateUser } = useMutation({
    mutationFn: async ({ userId, userData }) => {
      try {
        const { data: updatedUser } = await axios.put(
          `${BASE_URL}/api/users/${userId}`,
          userData,
          { withCredentials: true },
        );
        setUser(updatedUser);
        // console.log(updatedUser);
        // console.log(userData);
      } catch (error) {
        console.log(error);
        if (
          error.response.data.message === "Not authorized, no token" ||
          error.response.data.message === "Not authorized, token failed"
        ) {
          setUser(null);
          navigate("/login", { replace: true });
        }
        toast.error(error.response.data.message);
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Successfully updated");
      navigate("/users/profile", { replace: true });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
  return { updatedUser, isUpdateUser };
}
