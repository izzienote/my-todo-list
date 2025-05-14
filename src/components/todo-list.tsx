"use client";

import TodoCard from "@/components/todo-card";
import { useTodos } from "@/lib/hooks/queries";
import { useState } from "react";
import LoadingPage from "@/app/loading";
import type { ToDoFilterType } from "@/types/todo";

const TodoList = () => {
  const { data: todos = [], isPending, isError } = useTodos();
  const [filter, setFilter] = useState<ToDoFilterType>("전체");

  if (isPending) return <LoadingPage />;
  if (isError) throw new Error("데이터를 가져오는 데 실패했습니다.");

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
          {filter === "전체"
            ? noRecordText
            : filter === "완료"
            ? noCompletedText
            : noIncompletedText}
        </div>
      ) : (
        <article className="w-full h-full gap-3 flex flex-row flex-wrap items-center justify-start">
          {filteredTodos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </article>
      )}
    </section>
  );
};

export default TodoList;

const noRecordText = `앗! 아직 작성된 투두가 없어요.
하고 싶은 일을 하나 적어볼까요?`;
const noCompletedText = `앗! 아직 완료된 투두가 없어요.
천천히 하나씩 마무리해볼까요?`;
const noIncompletedText = `모든 투두를 완료하셨어요!
정말 멋져요. 새로운 계획을 세워볼까요?`;
