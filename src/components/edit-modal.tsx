"use client";

import { useEditTodo } from "@/lib/hooks/mutation";
import { useState } from "react";
import Swal from "sweetalert2";
import type { Todo } from "@/types/todo";

type EditModalProps = {
  todo: Todo;
  onClose: () => void;
};

const EditModal = ({ todo, onClose }: EditModalProps) => {
  const editMutation = useEditTodo();
  // [입력란 상태관리]
  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);
  // [form 제출]
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editMutation.mutate(
      { todoId: todo.id, title, content },
      {
        onSuccess: () => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "수정되었습니다!",
            showConfirmButton: false,
            timer: 1500,
          });
          onClose();
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white w-full p-5 flex flex-col border border-black rounded-md text-slate-800 gap-3 justify-center items-center"
    >
      <div className="w-full flex flew-row justify-between">
        <strong className="text-xl">할 일 수정하기</strong>
        <button type="button" onClick={onClose} className="text-2xl">
          &times;
        </button>
      </div>
      {/* 타이틀 입력란 */}
      <label className="w-full text-start flex">Title</label>
      <input
        type="text"
        placeholder="제목을 입력해주세요..."
        className="w-full min-w-52 border border-slate-400 rounded-md px-3 py-1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label className="w-full text-start flex">Content</label>
      {/* 내용 입력란 */}
      <textarea
        placeholder="내용을 입력해주세요..."
        className="w-full min-w-52 border border-slate-400 rounded-md px-3 py-1 min-h-32"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        maxLength={300}
        required
      />
      <div className="text-slate-500 text-right w-full">
        {content.length}/300 자
      </div>
      {/* 저장 버튼 */}
      <button
        type="submit"
        className="w-full bg-yellow-950 text-white py-1 rounded-full"
      >
        저장하기
      </button>
    </form>
  );
};

export default EditModal;
