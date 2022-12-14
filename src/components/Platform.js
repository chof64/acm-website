import React from "react";

import { classMerge } from "/src/utils/TailwindUtilities";

export default function Platform({ children, className }) {
  return (
    <div className={classMerge("flex h-full flex-col items-center", className)}>
      <div className="h-full w-[95vw] md:w-[90vw] lg:w-[90vw]">{children}</div>
    </div>
  );
}
