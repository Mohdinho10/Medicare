import { useMutation } from "@tanstack/react-query";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../config";

export function useCreateBooking() {
  //   const navigate = useNavigate();

  const { mutate: book, isPending: isBooking } = useMutation({
    mutationFn: async (doctorId) => {
      try {
        const { data } = await axios.post(
          `${BASE_URL}/api/bookings/checkout-session/${doctorId}`,
          {
            withCredentials: true,
          },
        );

        if (data.session.url) {
          window.location.href = data.session.url;
        }

        // toast.success("Welcome to medicare");
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
        throw error;
      }
    },
    // onSuccess: () => {
    //   navigate("/", { replace: true });

    // },
  });

  return { book, isBooking };
}
