import Logo from "@/components/logo";
import TodoForm from "@/components/todo-form";
import TodoList from "@/components/todo-list";

const TodoPage = () => {
  return (
    <div className="h-full px-5 min-h-screen flex flex-col justify-center items-center overflow-y-auto">
      <Logo />
      <p className="text-l mb-5">Today's To Do</p>
      <p className="text-gray-500 whitespace-pre-wrap mb-5">{introText}</p>
      <TodoForm />

      <div className="w-full border-b border-black my-16"></div>
      <TodoList />
    </div>
  );
};

export default TodoPage;

const introText = `당신의 라이프를 효율적으로 관리할 수 있는, 
투두 리스트 기능을 제공합니다.`;
