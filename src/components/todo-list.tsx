"use client";

import TodoCard from "@/components/todo-card";
import { useTodos } from "@/lib/hooks/queries";
import { useState } from "react";
import type { ToDoFilterType } from "@/types/todo";

const TodoList = () => {
  const { data: todos = [], isPending, isError } = useTodos();
  const [filter, setFilter] = useState<ToDoFilterType>("전체");

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>에러발생</div>;

  const filteredTodos = todos.filter((todo) => {
    if (filter === "전체") return true;
    if (filter === "완료") return todo.isDone;
    if (filter === "미완료") return !todo.isDone;
  });

  return (
    <section className="w-full h-full flex flex-col justify-center items-center mb-40">
      <nav className="flex flex-row text-slate-800 gap-6 font-semibold mb-5">
        {/* 필터 버튼 (전체/완료/미완료) */}
        {(["전체", "완료", "미완료"] as ToDoFilterType[]).map((navItem) => (
          <button
            key={navItem}
            className={`${
              filter === navItem
                ? "border-yellow-950 transition-all rounded-full duration-400 ease-in-out bg-yellow-800 bg-opacity-70 text-white w-20 h-10"
                : "border-none rounded-full bg-transparent text-slate-500 w-20 h-10"
            }`}
            onClick={() => setFilter(navItem)}
          >
            {navItem}
          </button>
        ))}
      </nav>

      {/* todo 유무에 따른 UI 배치 */}
      {filteredTodos.length === 0 ? (
        <div className="text-slate-700 w-full min-h-80 bg-black bg-opacity-20 rounded-md flex items-center justify-center whitespace-pre-wrap text-center">
          {noRecordText}
        </div>
      ) : (
        <article className="w-full gap-3 flex flex-row flex-wrap items-center justify-start">
          {filteredTodos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </article>
      )}
    </section>
  );
};

export default TodoList;

const noRecordText = `앗! 작성된 투두 리스트가 없어요.
새로 작성해볼까요?`;
