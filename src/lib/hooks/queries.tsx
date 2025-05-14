import { QUERY_KEY } from "@/constants/query-key";
import { Todo } from "@/types/todo";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/lib/utils/get-todos.util";

export const useTodos = () => {
  return useQuery<Todo[]>({
    queryKey: [QUERY_KEY.TODOS],
    queryFn: getTodos,
  });
};
