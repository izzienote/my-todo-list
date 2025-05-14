import Logo from "@/components/logo";
import TodoForm from "@/components/todo-form";
import TodoList from "@/components/todo-list";
import { QUERY_KEY } from "@/constants/query-key";
import { getTodos } from "@/lib/utils/get-todos.util";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const TodoPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.TODOS],
    queryFn: getTodos,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="h-full px-5 min-h-screen flex flex-col justify-center items-center overflow-y-auto">
        <Logo />
        <p className="text-l mb-5 text-yellow-950">Today&apos;s To Do</p>
        <p className="text-gray-500 whitespace-pre-wrap mb-5">{introText}</p>
        <TodoForm />
        {/* 구분선 */}
        <div className="w-full border-b border-black my-16"></div>
        <TodoList />
      </div>
    </HydrationBoundary>
  );
};

export default TodoPage;

const introText = `당신의 라이프를 효율적으로 관리할 수 있는, 
투두 리스트 기능을 제공합니다.`;
