import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateUser } = useMutation({
    mutationFn: ({ password, fullName, avatar }) =>
      updateCurrentUser({ password, fullName, avatar }),
    onSuccess: () => {
      toast.success("User account successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateUser, isUpdating };
}
