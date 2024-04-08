import { Direction } from "@/types/sort";

export const sortObjectsByKey = (
  data: Record<string, string | number>[],
  attribute: string,
  direction: Direction = Direction.Ascending
): Record<string, string | number>[] => {
  if (data.find((element) => element[attribute] !== undefined) === undefined) {
    throw new Error(
      "Attribute is not present in any of the objects inside the array."
    );
  }

  // Ensure we are not modifying the original reference
  let sortedData = [...data];

  return sortedData.sort((a, b) => {
    const itemA = a[attribute];
    const itemB = b[attribute];
    let compare = 0;

    if (typeof itemA === "number" && typeof itemB === "number") {
      if (itemA > itemB) {
        compare = 1;
      }

      if (itemA < itemB) {
        compare = -1;
      }
    }

    if (typeof itemA === "string" && typeof itemB === "string") {
      if (itemA.toUpperCase() > itemB.toUpperCase()) {
        compare = 1;
      }

      if (itemA.toUpperCase() < itemB.toUpperCase()) {
        compare = -1;
      }
    }

    if (direction === Direction.Descending) {
      compare *= -1;
    }

    return compare;
  });
};

export default sortObjectsByKey;
