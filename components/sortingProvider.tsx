"use client";
import React, { createContext, useState } from "react";
import { Direction } from "@/types/sort";

export type TSortingContext = {
  sortBy: "department" | "description" | "datasets";
  sortOrder: Direction;
  setSortBy: Function;
  setSortOrder: Function;
};

export const SortingContext = createContext<TSortingContext | null>(null);

export const SortingProvider = ({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState?: Pick<TSortingContext, "sortBy" | "sortOrder">;
}): React.ReactNode => {
  const [sortBy, setSortBy] = useState<TSortingContext["sortBy"]>(
    initialState?.sortBy ?? "department"
  );
  const [sortOrder, setSortOrder] = useState<TSortingContext["sortOrder"]>(
    initialState?.sortOrder ?? Direction.Ascending
  );

  return (
    <SortingContext.Provider
      value={{ sortBy, setSortBy, sortOrder, setSortOrder }}
    >
      {children}
    </SortingContext.Provider>
  );
};

export default SortingProvider;
