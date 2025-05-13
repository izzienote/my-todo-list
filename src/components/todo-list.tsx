import TodoCard from "@/components/todo-card";

const TodoList = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1>할일 리스트</h1>
      <div className="text-pink-500">
        필터 셀렉트 박스 추가 (전체보기/완료보기)
      </div>
      <TodoCard />
    </section>
  );
};

export default TodoList;
