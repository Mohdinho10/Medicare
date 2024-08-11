import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";

export function useReview(id) {
  const { mutate: createReview, isPending } = useMutation({
    queryKey: ["reviews", id],
    mutationFn: async (data) => {
      try {
        const res = await axios.post(
          `${BASE_URL}/doctors/${id}/reviews`,
          data,
          { withCredentials: true },
        );
        // console.log(id);
        console.log(res);
        toast.success("Review submitted");
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
        throw error;
      }
    },
  });

  return { createReview, isPending };
}
