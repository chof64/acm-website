import React from "react";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";

import Platform from "./Platform";

export default function Navigation() {
  return (
    <Menu>
      {({ open }) => (
        <Platform className="py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-1">
              <div className="relative w-16 aspect-square">
                <Image
                  priority
                  layout="fill"
                  objectFit="cover"
                  src="/images/ccs-logo.png"
                  alt="ACM Logo"
                />
              </div>
              <div className="rounded-r-md border-l-2 border-l-black py-1.5 px-1.5">
                <h1 className="flex flex-col font-bold leading-tight uppercase">
                  Association of <span>Computing Machinery</span>
                </h1>
              </div>
            </div>
            <Menu.Button>
              {open ? (
                <div className="flex flex-col items-center justify-center p-1 bg-red-100 border rounded-md text-neutral-600">
                  <XIcon className="w-8 h-8" />
                  <p className="text-[0.5rem] uppercase leading-none">Menu</p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-1 border rounded-md text-neutral-600">
                  <MenuIcon className="w-8 h-8" />
                  <p className="text-[0.5rem] uppercase leading-none">Menu</p>
                </div>
              )}
            </Menu.Button>
          </div>
        </Platform>
      )}
    </Menu>
  );
}
