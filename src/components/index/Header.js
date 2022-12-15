import React from "react";

import Platform from "/src/components/Platform";
import { classMerge } from "/src/utils/classMerge";

export default function Header({ className }) {
  return (
    <div
      className={classMerge(
        "h-[100vh] w-full bg-[url('/images/header-cover.jpg')] bg-cover bg-fixed bg-center",
        className
      )}
    >
      <Platform className="bg-black/20 backdrop-blur-[2px]">
        <div className="relative h-full w-full">
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-5xl font-extrabold text-white md:text-6xl">
              Association of Computing Machinery
            </div>
          </div>
          <div className="absolute bottom-8 right-0 select-none text-right text-xs leading-none text-white md:text-sm">
            <p>College of Computer Studies</p>
            <p>University of Antique</p>
          </div>
        </div>
      </Platform>
    </div>
  );
}
