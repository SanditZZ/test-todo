"use client";

import { Todo } from "@/app/lib/definitions";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function DeleteTaskBtn({ onDelete }: { onDelete: () => void }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    onDelete();
  };

  return (
    <button
      title="Delete Task"
      type="button"
      disabled={isDeleting}
      onClick={handleDelete}
    >
      <TrashIcon className="w-6 h-6" />
    </button>
  );
}
