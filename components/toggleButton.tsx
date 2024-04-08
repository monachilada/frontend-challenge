import React, { useContext } from "react";
import { SortingContext } from "@/components/sortingProvider";
import { Direction } from "@/types/sort";

export default function ToggleButton({
  attribute,
}: {
  attribute: string;
}): React.ReactNode {
  const sortingContext = useContext(SortingContext);
  if (sortingContext !== null) {
    const { sortBy, sortOrder, setSortBy, setSortOrder } = sortingContext;

    return (
      <button
        onClick={() => {
          setSortBy(attribute);
          setSortOrder(
            sortBy === attribute
              ? sortOrder === Direction.Ascending
                ? Direction.Descending
                : Direction.Ascending
              : sortOrder
          );
        }}
        className={
          "transition-all" +
          // Rotate the button to reflect the order
          (sortBy === attribute && sortOrder === Direction.Descending
            ? " rotate-180"
            : "") +
          // Subdue the button if it's not the subject of sort
          (sortBy !== attribute ? " opacity-25" : "")
        }
      >
        🔼
      </button>
    );
  }
}
