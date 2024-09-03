export interface Todo {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
  status: TodoStatus;
}

export interface TodosResponse {
  tasks: Todo[];
  pageNumber: number;
  totalPages: number;
}

export enum TodoStatus {
  TODO = "TODO",
  DOING = "DOING",
  DONE = "DONE",
}
