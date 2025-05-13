"use client";

import TodoCard from "@/components/todo-card";
import { useTodos } from "@/lib/hooks/queries";

const TodoList = () => {
  const { data: todos, isPending, isError } = useTodos();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>에러발생</div>;

  return (
    <section className="w-full h-full flex flex-col justify-center items-center mb-40">
      {/* 필터 보기 (전체/완료/미완료) */}
      <nav className="flex flex-row text-slate-800 gap-5 font-semibold mb-5">
        <button>전체</button>
        <button>완료</button>
        <button>미완료</button>
      </nav>

      {/* todo 유무에 따른 UI 배치 */}
      {todos.length === 0 ? (
        <div className="text-slate-700 w-full min-h-80 bg-black bg-opacity-20 rounded-md flex items-center justify-center whitespace-pre-wrap text-center">
          {noRecordText}
        </div>
      ) : (
        <article className="w-full gap-3 flex flex-col">
          {todos.map((todo) => (
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
