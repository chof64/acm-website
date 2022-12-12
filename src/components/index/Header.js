import React from "react";

import Platform from "/src/components/Platform";

export default function Header() {
  return (
    <div className="h-[90vh] w-full bg-[url('/images/header-cover.jpg')] bg-cover bg-fixed bg-center">
      <Platform className="bg-black/20 backdrop-blur-[2px]">
        <div className="relative h-full w-full">
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-5xl font-extrabold text-white md:text-6xl">
              Association of Computing Machinery
            </div>
          </div>
          <div className="absolute bottom-8 right-0 flex flex-col items-end text-xs font-medium text-white md:text-base">
            <p>Department of Computer Studies</p>
            <p>University of Antique</p>
          </div>
        </div>
      </Platform>
    </div>
  );
}
