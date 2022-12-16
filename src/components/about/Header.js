import React from "react";

import Platform from "/src/components/Platform";
import { classMerge } from "/src/utils/classMerge";

export default function Header() {
  return (
    <div className="h-[100vh] bg-[url('/images/background/acm-acquaintance-cs.jpg')] bg-cover bg-center">
      <Platform className="bg-black/70 backdrop-blur-[2px]">
        <div className="flex h-full w-full items-center">
          <div className="h-72 w-full md:flex md:justify-between">
            <h1 className="max-w-md text-4xl font-bold text-white md:text-5xl">
              About the Organization
            </h1>
            <p className="mt-5 max-w-md place-self-end font-serif text-lg font-medium text-white md:mt-0 md:text-2xl">
              The Association of Computer Machinery, known by its initials, is
              one of the academic organizations in the Department of Computer
              Studies of the University of Antique.
            </p>
          </div>
        </div>
      </Platform>
    </div>
  );
}
