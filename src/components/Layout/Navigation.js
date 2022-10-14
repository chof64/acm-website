import React from "react";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";

import Platform from "./Platform";

import { classMerge } from "/src/utils/TailwindUtilities";

export default function Navigation() {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Platform className="bg-white py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-1">
                <div className="relative aspect-square w-16">
                  <Image
                    priority
                    layout="fill"
                    objectFit="cover"
                    src="/images/ccs-logo.png"
                    alt="ACM Logo"
                  />
                </div>
                <div className="rounded-r-md border-l-2 border-l-black py-1.5 px-1.5">
                  <h1 className="flex flex-col font-bold uppercase leading-tight">
                    Association of <span>Computing Machinery</span>
                  </h1>
                </div>
              </div>
              <Menu.Button>
                {open ? (
                  <div className="flex flex-col items-center justify-center rounded-md border bg-red-100 p-1 text-neutral-600">
                    <XIcon className="h-8 w-8" />
                    <p className="text-[0.5rem] uppercase leading-none">Menu</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center rounded-md border p-1 text-neutral-600">
                    <MenuIcon className="h-8 w-8" />
                    <p className="text-[0.5rem] uppercase leading-none">Menu</p>
                  </div>
                )}
              </Menu.Button>
            </div>
          </Platform>
          <div className="absolute w-full">
            <div className="absolute mt-8 flex max-h-[60vh] w-full justify-center">
              {/* // TODO: Adjust tray sizes across different viewports. */}
              <Menu.Items
                as="div"
                className="flex w-[80vw] flex-col gap-y-2 overflow-auto rounded-lg border border-neutral-300 bg-white p-4 shadow-md shadow-gray-200/50 focus:outline-none md:w-[75vw] lg:w-[60vw]"
              >
                <p>Navigation will be added here.</p>
              </Menu.Items>
            </div>
            <div
              className={classMerge(
                open
                  ? "fixed inset-0 -z-50 h-full w-full bg-gray-100/50 backdrop-blur"
                  : null
              )}
            />
          </div>
        </>
      )}
    </Menu>
  );
}
