import { QUERY_KEY } from "@/constants/query-key";
import { Todo } from "@/types/todo";
import { useQuery } from "@tanstack/react-query";

export const useTodos = () => {
  return useQuery<Todo[]>({
    queryKey: [QUERY_KEY.TODOS],
    queryFn: async () => {
      const response = await fetch("http://localhost:4000/todos");
      const data = await response.json();
      return data;
    },
  });
};
