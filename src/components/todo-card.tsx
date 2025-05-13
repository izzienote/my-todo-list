import { useDeleteTodo, useSwitchTodo } from "@/lib/hooks/mutation";
import { SwitchTodo, Todo } from "@/types/todo";
import { MdEdit } from "react-icons/md";
import Swal from "sweetalert2";

type TodoCardProps = {
  todo: Todo;
};

const TodoCard = ({ todo }: TodoCardProps) => {
  const deleteMutation = useDeleteTodo();
  const switchMutation = useSwitchTodo();

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
        Swal.fire({
          title: "Deleted!",
          text: "삭제가 완료되었습니다.",
          icon: "success",
        });
      }
    });

    deleteMutation.mutate(todoId);
  };

  const hanldeSwitchTodo = ({ todoId, isDone }: SwitchTodo) => {
    switchMutation.mutate({ todoId, isDone });
  };
  return (
    <article className="w-full h-full flex flex-col border border-black rounded-md px-5 py-5">
      {/* 타이틀 및 내용 */}
      <ul className="flex flex-col gap-3">
        <li className="font-bold text-black">{todo.title}</li>
        <li className="text-black overflow-y-auto max-h-14">{todo.content}</li>
      </ul>
      <div className="flex flex-row gap-1 justify-end">
        {/* 완료 및 취소 토글 버튼 */}
        {!todo.isDone ? (
          <button
            onClick={() =>
              hanldeSwitchTodo({ todoId: todo.id, isDone: !todo.isDone })
            }
            className=" bg-green-700 rounded-md px-1 text-white text-xs"
          >
            Done
          </button>
        ) : (
          <button
            onClick={() =>
              hanldeSwitchTodo({ todoId: todo.id, isDone: !todo.isDone })
            }
            className=" bg-red-400 rounded-md px-1 text-white text-xs"
          >
            Cancel
          </button>
        )}
        {/* 수정 버튼 */}
        <button className="h-5 w-5 items-center justify-center flex bg-orange-400 rounded-full text-white">
          <MdEdit />
        </button>
        {/* 삭제 버튼 */}
        <button
          onClick={() => handleDeleteTodo(todo.id)}
          className="h-5 w-5 items-center justify-center flex bg-red-700 rounded-full text-white"
        >
          <div className="font-semibold">&times;</div>
        </button>
      </div>
    </article>
  );
};

export default TodoCard;
