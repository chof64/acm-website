import React from "react";

import { classMerge } from "/src/utils/TailwindUtilities";

export default function TrayPlatform({ children, className }) {
  return (
    <div className={classMerge("flex flex-col items-center", className)}>
      <div className="w-[95vw] md:w-[50vw] lg:w-[50vw]">{children}</div>
    </div>
  );
}
