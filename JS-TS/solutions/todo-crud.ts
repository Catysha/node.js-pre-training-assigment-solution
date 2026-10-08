import { Todo } from './types';

export function addTodo(state: Todo[], todo: Todo): Todo[] {
  if(state == undefined) throw new Error('addTodo: not implemented');
  let res: Todo[] = [...state];
  res.push(todo);
  return res;
}

export function updateTodo(state: Todo[], id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Todo[] {
  if(state == undefined) throw new Error('updateTodo: not implemented');
  let res: Todo[] = [...state];
  for (let i = 0; i < state.length; i++) {
    if (res[i].id == id) {
      res[i] = {...state[i],...update};
      return res;
    }
  }
  throw new Error('removeTodo: does not exist');
}

export function removeTodo(state: Todo[], id: number): Todo[] {
  if(state == undefined) throw new Error('removeTodo: not implemented');
  let res: Todo[] = [...state];
  for (let i = 0; i < state.length; i++) {
    if(state[i].id == id){
      res.splice(i, 1);
      return res;
    }
  }
  throw new Error('removeTodo: does not exist');
}

export function getTodo(state: Todo[], id: number): Todo | undefined {
  if(state == undefined) throw new Error('getTodo: not implemented');
  for(let i = 0; i < state.length; i++){
    if(state[i].id == id){
      return state[i];
    }
  }
  return undefined;
}

