import { QUERY_KEY } from "@/constants/query-key";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { TodoInput } from "@/types/todo";

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newTodo: TodoInput) => {
      const response = await fetch("http://localhost:4000/todos", {
        method: "POST",
        body: JSON.stringify(newTodo),
      });

      return response.json();
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.TODOS],
      });
    },
  });
};
