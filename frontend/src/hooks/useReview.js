import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export function useReview(id) {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const { mutate: createReview, isPending } = useMutation({
    queryKey: ["reviews", id],
    mutationFn: async (data) => {
      try {
        const res = await axios.post(
          `${BASE_URL}/api/doctors/${id}/reviews`,
          data,
          { withCredentials: true },
        );
        // console.log(id);
        console.log(res);
        toast.success("Review submitted");
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
  });

  return { createReview, isPending };
}
