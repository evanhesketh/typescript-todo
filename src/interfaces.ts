interface TodoInterface {
  id: string,
  title: string,
  description: string,
  priority: number
};

interface NewTodoInterface {
  title: string,
  description: string,
  priority: number
};

interface EditableTodoListPropsInterface {
  todos: TodoInterface[],
  remove: (id: string) => void,
  update: (updatedTodo: TodoInterface) => void
};

export type {TodoInterface, NewTodoInterface, EditableTodoListPropsInterface};


