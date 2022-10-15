import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tab } from "@headlessui/react";

import LayoutGlobal from "/src/components/Layout/LayoutGlobal";
import Layout from "/src/components/Layout/Layout";
import Platform from "/src/components/Layout/Platform";

import { classMerge } from "/src/utils/TailwindUtilities";

export default function Index() {
  return (
    <>
      <Platform>
        <div className="mt-5">
          <div className="p-4 rounded-lg bg-gray-50">
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="w-full p-1 bg-white rounded-md md:w-1/2">
                <div className="relative aspect-[982/533] w-full">
                  <Image
                    className="rounded-md"
                    layout="fill"
                    objectFit="cover"
                    priority
                    src="/images/acm-banner.jpg"
                    alt="ACM Banner Logo"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h1 className="text-2xl font-bold">
                  Association of Computing Machinery
                </h1>
                <div>
                  <p className="">
                    Description and overview of ACM goes here..
                  </p>
                  <p>
                    This can be a long or a short description, it doesn&apos;t
                    really matter that much.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Tab.Group
            as="div"
            className="relative flex flex-col gap-3 p-2 mt-6 bg-gray-100 border rounded-lg border-neutral-300 md:flex-row"
            vertical
          >
            <p className="absolute -top-2 left-2 rounded bg-white px-0.5 text-xs font-semibold text-neutral-400">
              Latest Information
            </p>
            <Tab.List className="mt-2 grid grid-rows-3 gap-1 pb-1 font-semibold md:w-[30%]">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={classMerge(
                      "rounded-lg p-2 text-left",
                      selected ? "bg-white text-teal-600" : "text-gray-400"
                    )}
                  >
                    Announcements
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={classMerge(
                      "rounded-lg p-2 text-left",
                      selected ? "bg-white text-teal-600" : "text-gray-400"
                    )}
                  >
                    Blog
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={classMerge(
                      "rounded-lg p-2 text-left",
                      selected ? "bg-white text-teal-600" : "text-gray-400"
                    )}
                  >
                    Events
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className="rounded-lg bg-white p-2 pt-1 shadow-inner md:w-[70%]">
              <Tab.Panel className="">
                <h2 className="text-xs font-bold text-gray-400 uppercase">
                  Latest Announcements
                </h2>
                {/* Add list of announcements from CMS here. */}
              </Tab.Panel>
              <Tab.Panel>
                <h2 className="text-xs font-bold text-gray-400 uppercase">
                  Blog Posts
                </h2>
              </Tab.Panel>
              <Tab.Panel>
                <h2 className="text-xs font-bold text-gray-400 uppercase">
                  Scheduled Events
                </h2>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Platform>
    </>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal>
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};
