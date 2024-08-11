import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import axios from "axios";
import { BASE_URL } from "../config";
import { useUser } from "../context/UserContext";

export function useUpdateDoctor() {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const queryClient = useQueryClient();

  const { mutate: updateDoctor, isPending: isUpdateDoctor } = useMutation({
    mutationFn: async ({ doctorId, doctorData }) => {
      try {
        const { data: updatedDoctor } = await axios.put(
          `${BASE_URL}/doctors/${doctorId}`,
          doctorData,
          { withCredentials: true },
        );
        setUser(updatedDoctor);
        // console.log(updatedDoctor);
        // console.log(doctorData);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Successfully updated");
      navigate("/doctor/profile", { replace: true });
      queryClient.invalidateQueries({ queryKey: ["doctor"] });
    },
  });
  return { updateDoctor, isUpdateDoctor };
}
