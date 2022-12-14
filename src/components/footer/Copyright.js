import React from "react";

import Platform from "./../Platform";
import { classMerge } from "/src/utils/classMerge";

export default function Copyright({ className }) {
  return (
    <Platform className={classMerge("", className)}>
      <div>
        <p className="text-sm text-neutral-500">
          Copyright © 2022 Association of Computing Machinery. All rights
          reserved.
        </p>
      </div>
    </Platform>
  );
}
