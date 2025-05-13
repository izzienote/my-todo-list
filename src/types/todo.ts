export type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

export type TodoInput = Omit<Todo, "id">;

export type SwitchTodo = {
  todoId: string;
  isDone: boolean;
};

export type UpdateTodo = {
  todoId: string;
  newTodo: TodoInput;
};

export type ToDoFilterType = "전체" | "완료" | "미완료";
