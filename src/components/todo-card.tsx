import { useDeleteTodo, useSwitchTodo } from "@/lib/hooks/mutation";
import { MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";
import type { SwitchTodo, Todo } from "@/types/todo";
import EditModal from "./edit-modal";

type TodoCardProps = {
  todo: Todo;
};

const TodoCard = ({ todo }: TodoCardProps) => {
  const deleteMutation = useDeleteTodo();
  const switchMutation = useSwitchTodo();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDeleteTodo = (todoId: string) => {
    Swal.fire({
      title: "삭제하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "네, 삭제합니다.",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(todoId);
      }
    });
  };

  const hanldeSwitchTodo = ({ todoId, isDone }: SwitchTodo) => {
    switchMutation.mutate({ todoId, isDone });
  };

  return (
    <article className="w-full h-44 max-w-96 flex flex-col border border-black rounded-md px-5 py-5 relative">
      {/* 타이틀 및 내용 */}
      <ul className="flex flex-col gap-3">
        <li className="font-bold text-black line-clamp-2 break-words whitespace-pre-wrap">
          {todo.title}
        </li>
        <li className="text-black overflow-y-auto max-h-14 break-words whitespace-pre-wrap">
          {todo.content}
        </li>
      </ul>
      <div className="absolute bottom-3 right-3 flex flex-row gap-1 justify-end">
        {/* 완료 및 취소 토글 버튼 */}
        {todo.isDone ? (
          <button
            onClick={() =>
              hanldeSwitchTodo({ todoId: todo.id, isDone: !todo.isDone })
            }
            className=" bg-green-700 rounded-md px-1 text-white text-xs hover:bg-green-800 hover:scale-105 duration-200 "
          >
            Completed
          </button>
        ) : (
          <button
            onClick={() =>
              hanldeSwitchTodo({ todoId: todo.id, isDone: !todo.isDone })
            }
            className=" bg-red-400 rounded-md px-1 text-white text-xs hover:bg-red-600 hover:scale-105 duration-200"
          >
            Incomplete
          </button>
        )}
        {/* 수정 버튼 */}
        <button
          onClick={() => setIsEditModalOpen(true)}
          className="h-5 w-5 items-center justify-center flex bg-orange-400 rounded-full text-white hover:bg-orange-600 hover:scale-105 duration-200"
        >
          <MdEdit />
        </button>
        {/* 삭제 버튼 */}
        <button
          onClick={() => handleDeleteTodo(todo.id)}
          className="h-5 w-5 items-center justify-center flex bg-red-700 rounded-full text-white hover:bg-red-800 hover:scale-105 duration-200"
        >
          <div className="flex justify-center items-center text-center">
            &times;
          </div>
        </button>
      </div>
      {/* 수정 모달 컴포넌트 */}
      {isEditModalOpen && (
        <div className="px-5 fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10">
          <EditModal todo={todo} onClose={() => setIsEditModalOpen(false)} />
        </div>
      )}
    </article>
  );
};

export default TodoCard;
