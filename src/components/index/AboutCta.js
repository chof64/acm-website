import React from "react";

import Platform from "/src/components/Platform";
import { classMerge } from "/src/utils/classMerge";

export default function AboutCta({ className }) {
  return (
    <Platform
      className={classMerge(
        "bg-gradient-to-b from-orange-200 to-transparent pb-16 pt-32",
        className
      )}
    >
      <h1 className="text-center font-serif text-2xl font-medium md:text-3xl">
        An organization lead by <i>Computer Science</i> students for{" "}
        <i>Computer Science</i> students. Promoting teamwork, leadership, and
        excellence. Enhancing skills and sharing knowledge.
      </h1>
    </Platform>
  );
}
