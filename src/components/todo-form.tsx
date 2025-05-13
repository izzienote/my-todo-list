"use client";

import { useAddTodo } from "@/lib/hooks/mutation";
import { useState } from "react";

const TodoForm = () => {
  // [투두 추가] : useAddTodo
  const addMutation = useAddTodo();
  // [입력란 상태관리]
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // [form 제출]
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addMutation.mutate({ title, content, isDone: false });

    alert("할 일이 추가되었습니다!");
    setContent("");
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 justify-center items-center"
    >
      <label className="w-full text-left text-black">Title</label>
      <input
        placeholder="제목을 입력해주세요..."
        className="min-w-72 px-3 py-1 border rounded-md text-slate-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className="w-full text-left text-black">Content</label>
      <textarea
        placeholder="내용을 입력해주세요..."
        className="min-w-72 px-3 py-1 border rounded-md text-slate-500"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        maxLength={300}
      />
      <div className="text-slate-500 text-right w-full">
        {content.length}/300 자
      </div>

      <button
        type="submit"
        className="bg-yellow-950 px-3 py-1 rounded-md text-white"
      >
        등록
      </button>
    </form>
  );
};

export default TodoForm;
