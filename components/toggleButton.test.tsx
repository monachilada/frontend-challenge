import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "@jest/globals";
import { Direction } from "@/types/sort";
import ToggleButton from "./toggleButton";
import SortingProvider, { SortingContext } from "./sortingProvider";

test("Sorts array ascendingly by string key", () => {
  render(
    <SortingProvider
      initialState={{
        sortBy: "department",
        sortOrder: Direction.Ascending,
      }}
    >
      <ToggleButton attribute="department" />
      <ToggleButton attribute="datasets" />
    </SortingProvider>
  );
  const components = screen.getAllByRole("button");
  const firstButton = components[0];
  const secondButton = components[1];

  // Default state — sort by department ascending, datasets muted
  expect(firstButton.className).not.toContain("rotate-180");
  expect(firstButton.className).not.toContain("opacity-25");
  expect(secondButton.className).toContain("opacity-25");

  fireEvent.click(firstButton);

  // Sort by department descending
  expect(firstButton.className).toContain("rotate-180");

  fireEvent.click(secondButton);

  // Sort by datasets, maintain descending order, departments muted
  expect(firstButton.className).not.toContain("rotate-180");
  expect(firstButton.className).toContain("opacity-25");
  expect(secondButton.className).toContain("rotate-180");

  fireEvent.click(secondButton);

  // Sort by datasets ascending
  expect(firstButton.className).toContain("opacity-25");
  expect(secondButton.className).not.toContain("rotate-180");
});
