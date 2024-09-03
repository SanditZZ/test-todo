"use server";

import { TodosResponse, TodoStatus } from "./definitions";

const ITEMS_PER_PAGE = 10;

export async function getFilteredTodosStatus(
  status: TodoStatus,
): Promise<TodosResponse | null> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    let data = await fetch(
      `https://todo-list-api-mfchjooefq-as.a.run.app/todo-list?status=${status}&sortBy=createdAt&isAsc=false&limit=${ITEMS_PER_PAGE}`,
    );
    let jsonData = await data.json();

    if (jsonData) {
      return jsonData;
    }

    return null;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching filtered todos");
  }
}

export async function getFilteredTodosStatusInfinite(
  status: TodoStatus,
  page: number = 1,
): Promise<TodosResponse | null> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const offset = page - 1;
    let data = await fetch(
      `https://todo-list-api-mfchjooefq-as.a.run.app/todo-list?status=${status}&sortBy=createdAt&isAsc=false&limit=${ITEMS_PER_PAGE}&offset=${offset}`,
    );
    let jsonData = await data.json();

    if (jsonData) {
      return jsonData;
    }

    return null;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching filtered todos");
  }
}
