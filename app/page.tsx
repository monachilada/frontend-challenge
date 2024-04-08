"use client";
import { useContext } from "react";
import useSWR from "swr";
import type { ResponseData } from "@/pages/api/departments";
import { Direction } from "@/types/sort";
import sortObjectsByKey from "@/utils/sortObjectsByKey";
import ToggleButton from "@/components/toggleButton";
import SortingProvider, { SortingContext } from "@/components/sortingProvider";

export default function Home() {
  // Fetch data from API
  const { data, error, isLoading } = useSWR<ResponseData>("/api/departments");
  const sortingContext = useContext(SortingContext);

  if (error)
    return (
      <div>
        <span className="inline-block animate-pulse">❌</span> Failed to load
      </div>
    );

  if (isLoading)
    return (
      <div>
        <span className="inline-block animate-spin">⏳</span> Loading...
      </div>
    );

  if (data && sortingContext) {
    const { sortBy, sortOrder } = sortingContext;

    const topPerformers = sortObjectsByKey(
      data,
      "datasets",
      Direction.Descending
    ).slice(0, 3);
    const sortedData = sortObjectsByKey(data, sortBy, sortOrder);

    return (
      <>
        <div className="max-w-prose">
          <h1 className="text-5xl">Goverment department datasets dashboard</h1>
          <p className="text-lg mt-4">
            The dashboard displays top performers amongst goverment departments
            that have so far published their legally mandated public datasets,
            as well as a sortable table of all departments and their
            accompanying performance data.
          </p>
        </div>
        <h2 className="text-3xl mt-12">Top performers</h2>
        <div className="grid grid-rows-2 grid-cols-2 mt-4">
          <div className="row-span-2 bg-slate-600 p-4">
            <h3 className="text-7xl mb-2">
              🥇
              <br />
              {topPerformers[0].department}
            </h3>
            <span className="text-9xl font-bold text-amber-200">
              {topPerformers[0].datasets}
            </span>
          </div>
          <div className="bg-slate-700 p-4">
            <h3 className="text-5xl mb-2">
              🥈
              <br />
              {topPerformers[1].department}
            </h3>
            <span className="text-7xl font-bold text-amber-200">
              {topPerformers[1].datasets}
            </span>
          </div>
          <div className="bg-slate-800 p-4">
            <h3 className="text-4xl mb-2">
              🥉
              <br />
              {topPerformers[2].department}
            </h3>
            <span className="text-6xl font-bold text-amber-200">
              {topPerformers[2].datasets}
            </span>
          </div>
        </div>
        <h2 className="text-3xl mt-12">All departments</h2>
        <table className="table-auto text-left border-collapse border border-slate-500 mt-4">
          <thead>
            <tr className="bg-slate-700">
              <th className="p-1 border border-slate-600">
                <div className="flex justify-between gap-4">
                  <span>Department</span>
                  <ToggleButton attribute={"department"} />
                </div>
              </th>
              <th className="p-1 border border-slate-600">
                <div className="flex justify-between gap-4">
                  <span>Description</span>
                </div>
              </th>
              <th className="p-1 border border-slate-600">
                <div className="flex justify-between gap-4">
                  <span>Datasets</span>
                  <ToggleButton attribute={"datasets"} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((department, index) => (
              <tr
                key={department.department}
                className={index % 2 == 0 ? "bg-slate-900" : ""}
              >
                <td className="p-1 border border-slate-700">
                  {department.department}
                </td>
                <td className="p-1 border border-slate-700">
                  {department.description}
                </td>
                <td className="p-1 border border-slate-700">
                  {department.datasets}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
