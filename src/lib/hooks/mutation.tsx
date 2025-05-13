import { QUERY_KEY } from "@/constants/query-key";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { SwitchTodo, TodoInput, UpdateTodo } from "@/types/todo";

/**
 * @function useAddTodo - [추가] 새로운 투두 생성
 */
export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newTodo: TodoInput) => {
      const response = await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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

/**
 * @function useDeleteTodo - [삭제] 선택한 투두 삭제
 */
export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (todoId: string) => {
      const response = await fetch(`http://localhost:4000/todos/${todoId}`, {
        method: "DELETE",
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

/**
 * @function useSwitchTodo - [완료/취소] 투두 전환
 */
export const useSwitchTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ todoId, isDone }: SwitchTodo) => {
      const response = await fetch(`http://localhost:4000/todos/${todoId}`, {
        method: "PATCH",
        body: JSON.stringify({ isDone }),
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

/**
 * @function useUpdateTodo - [수정] 투두 수정하기
 */
export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ todoId, newTodo }: UpdateTodo) => {
      const response = await fetch(`http://localhost:4000/todos/${todoId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
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
