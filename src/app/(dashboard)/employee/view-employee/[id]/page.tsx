"use client";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const ViewEmployee = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  return <div>{id}</div>;
};

export default ViewEmployee;
