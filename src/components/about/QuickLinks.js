import React from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { ChevronUp as ChevronUpIcon } from "lucide-react";

import { quickLinks } from "/config/quickLinks.about.config";
import Platform from "/src/components/Platform";
import { classMerge } from "/src/utils/classMerge";
import { getConfig } from "/src/utils/getConfig";

// combine all the links into one array
const _allLinks = quickLinks.reduce((acc, curr) => {
  return [...acc, ...curr.links];
}, []);

// TODO: Add dynamic quick links for different sections of the about page.
// TODO: Add dynamic configuration for the quick links.
// Use configuration to know what do display on the quick links and what not
// to display. As based on which section the user is, some are relevant while
// some will not be.

export default function QuickLinks() {
  return (
    <>
      <Platform className="hidden bg-orange-200 py-8 md:flex">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">About</h1>
          <div className="flex gap-x-8 font-medium">
            {getConfig({
              key: "group",
              value: "internal",
              config: quickLinks,
            }).links.map((link) => (
              <Link href={link.href} key={link.name}>
                <a className="block py-2 hover:underline">{link.name}</a>
              </Link>
            ))}
          </div>
          <div className="flex gap-x-8 font-medium">
            {getConfig({
              key: "group",
              value: "external",
              config: quickLinks,
            }).links.map((link) => (
              <Link href={link.href} key={link.name}>
                <a className="hover:underline">{link.name}</a>
              </Link>
            ))}
          </div>
        </div>
      </Platform>
      <Platform className="bg-orange-200 py-8 md:hidden">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-md bg-white/50 py-2 px-2 text-orange-500 shadow">
                <h1 className="text-xl font-bold">About</h1>
                <ChevronUpIcon
                  className={classMerge(
                    "h-8 w-8 align-middle",
                    open ? "rotate-180" : null
                  )}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pl-6 font-medium text-neutral-700">
                <div className="mt-3 flex flex-col gap-y-3">
                  {_allLinks.map((link) => (
                    <Link href={link.href} key={link.name}>
                      <a className="hover:underline">{link.name}</a>
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </Platform>
    </>
  );
}
