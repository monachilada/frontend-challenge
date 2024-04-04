"use client";
import useSWR from "swr";
import type { ResponseData } from "../pages/api/departments";

export default function Home() {
  // Fetch data from API
  const { data, error, isLoading } = useSWR<ResponseData>("/api/departments");

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <div>{JSON.stringify(data)}</div>;
}
