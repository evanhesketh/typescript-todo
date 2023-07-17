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
}

export type {TodoInterface, NewTodoInterface};


