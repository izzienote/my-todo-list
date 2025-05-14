import { QUERY_KEY } from "@/constants/query-key";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { EditTodo, SwitchTodo, TodoInput } from "@/types/todo";

const API_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

/**
 * @function useAddTodo
 * @description [추가] 새로운 투두 생성
 */
export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newTodo: TodoInput) => {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      if (!response.ok) throw new Error("새로운 투두 생성에 실패했습니다.");
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
 * @function useDeleteTodo
 * @description [삭제] 선택한 투두 삭제
 */
export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (todoId: string) => {
      const response = await fetch(`${API_URL}/${todoId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("투두 삭제에 실패했습니다.");
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
 * @function useSwitchTodo
 * @description [완료/미완료] 투두의 완료 상태를 토글
 */
export const useSwitchTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ todoId, isDone }: SwitchTodo) => {
      const response = await fetch(`${API_URL}/${todoId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isDone }),
      });
      if (!response.ok)
        throw new Error("완료/미완료 상태 변환에 실패했습니다.");
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
 * @function useEditTodo
 * @description [수정] 투두의 제목과 내용을 수정
 */
export const useEditTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ todoId, title, content }: EditTodo) => {
      const response = await fetch(`${API_URL}/${todoId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
      if (!response.ok) throw new Error("투두 수정에 실패했습니다.");
      return response.json();
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.TODOS],
      });
    },
  });
};
