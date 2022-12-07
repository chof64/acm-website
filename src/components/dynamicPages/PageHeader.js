import React from "react";

import Platform from "/src/components/Platform";
import { classMerge } from "/src/utils/classMerge";

export default function PostHeader({ className, data }) {
  const { title, category, created_time: createdTime } = data;
  if (!data) {
    return <div>Post Header Error. No data received</div>;
  }

  return (
    <Platform className={classMerge("", className)}>
      <h1 className="text-3xl font-extrabold md:text-4xl">{title}</h1>
    </Platform>
  );
}
