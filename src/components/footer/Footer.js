import React from "react";

import Platform from "./../Platform";
import Copyright from "./Copyright";
import { classMerge } from "/src/utils/classMerge";

export default function Footer({ className }) {
  return (
    <div
      className={classMerge(
        "my-4 border-t border-neutral-300 bg-neutral-50 pt-4",
        className
      )}
    >
      <Platform>
        <div className="">
          <h1 className="flex flex-col text-lg font-bold uppercase leading-none text-neutral-500">
            Association of <span>Computing Machinery</span>
          </h1>
          <div className="mt-2 mb-6">
            <p className="text-sm leading-tight text-neutral-500">
              Department of Computer Studies
            </p>
            <p className="text-sm leading-tight text-neutral-500">
              University of Antique
            </p>
            <p className="text-sm leading-tight text-neutral-500">
              Sibalom, Antique 5713
            </p>
          </div>
        </div>
      </Platform>
      <Copyright />
    </div>
  );
}
