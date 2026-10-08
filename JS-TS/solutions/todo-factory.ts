import { Todo, NewTodo, TodoStatus } from './types';

let nextId = 1;

export function createTodo(input: NewTodo): Todo {
  if(input == undefined) throw new Error('createTodo: not implemented');
  return {
    ...input,
    id: nextId++,
    status: TodoStatus.PENDING,
    createdAt: new Date(),
  };
}
