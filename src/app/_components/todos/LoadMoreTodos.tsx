"use client";

import { Todo, TodosResponse, TodoStatus } from "@/app/lib/definitions";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { TodoTasksSkeleton } from "../skeletons";
import { getFilteredTodosStatusInfinite } from "@/app/lib/actions";

export default function LoadMoreTodos({
  status,
  onNewTasks,
}: {
  status: TodoStatus;
  onNewTasks: (newTasks: Todo[]) => void;
}) {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.05,
    // rootMargin: "0px 0px -50px 0px",
  });

  const loadMoreTasks = async () => {
    if (loading) return;

    setLoading(true);
    // console.log("Loading page:", page + 1);

    const nextPage = page + 1;
    try {
      const newTasksResponse: TodosResponse | null =
        await getFilteredTodosStatusInfinite(status, nextPage);

      // console.log("Fetched tasks:", newTasksResponse?.tasks);

      if (!newTasksResponse || !newTasksResponse.tasks.length) {
        setHasMore(false);
        // console.log("No more tasks to load");
      } else {
        onNewTasks(newTasksResponse.tasks);
        setPage(nextPage);
      }
    } catch (error) {
      console.error("Error loading more tasks:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inView && hasMore && !loading) {
      // console.log("inView triggered, loading more tasks");
      loadMoreTasks();
    }
  }, [inView]);

  return (
    <>
      <div ref={ref}>
        {loading ? (
          <TodoTasksSkeleton />
        ) : !hasMore ? (
          <p className="text-center text-gray-500 py-4 text-sm font-semibold w-full select-none">
            No more tasks
          </p>
        ) : null}
      </div>
    </>
  );
}
