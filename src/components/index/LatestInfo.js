import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";

import { latestInfo } from "/config/latestInfo.index.config";
import Platform from "./../Platform";
import LatestInfoContent from "./LatestInfoContent";
import { classMerge } from "/src/utils/classMerge";

export default function LatestInfo({ className, data }) {
  return (
    <Platform className={classMerge("", className)}>
      <h1 className="text-3xl font-extrabold md:text-4xl">
        Latest Information
      </h1>
      <Tab.Group
        as="div"
        className="mt-4 justify-between rounded-md bg-orange-200 p-1 shadow md:flex md:space-x-1"
        vertical
      >
        <Tab.List className="flex w-full flex-col rounded-md border border-white bg-white/30 backdrop-blur-md md:min-w-[25%] md:max-w-xs">
          {latestInfo.map((item) => (
            <Tab as={Fragment} key={item.name}>
              {({ selected }) => (
                <button
                  className={classMerge(
                    "rounded-md p-3 text-start font-bold",
                    selected ? "bg-white text-orange-500" : ""
                  )}
                >
                  {item.name}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-5 max-h-[12rem] min-h-[12rem] w-full overflow-auto rounded-md border border-white bg-white/50 p-2 md:mt-0">
          {latestInfo.map((item) => (
            <Tab.Panel key={item.name}>
              <LatestInfoContent
                name={item.name}
                ident={item.ident}
                data={data.items.results}
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </Platform>
  );
}
