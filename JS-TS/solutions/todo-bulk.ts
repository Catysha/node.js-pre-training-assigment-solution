import {Todo, TodoStatus} from './types';

export function toggleAll(state: Todo[], completed: boolean): Todo[] {
  if(state == undefined) throw new Error('toggleAll: not implemented')
  return state.map(item => ({
    ...item,
    status: completed
        ? TodoStatus.COMPLETED
        : TodoStatus.PENDING
  }));
}

export function clearCompleted(state: Todo[]): Todo[] {
  if(state == undefined) throw new Error('clearCompleted: not implemented');
  return state.filter(item => item.status != TodoStatus.COMPLETED);
}

export function countByStatus(state: Todo[], status: TodoStatus): number {
  if(state == undefined) throw new Error('countByStatus: not implemented');
  let res: Todo[] = [...state];
  res.filter(item => item.status == status)
  return res.length;
}
