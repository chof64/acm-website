import React from "react";
import Image from "next/image";

import LayoutGlobal from "/src/components/Layout/LayoutGlobal";
import Layout from "/src/components/Layout/Layout";
import Platform from "/src/components/Layout/Platform";
export default function Index() {
  return (
    <>
      <Platform>
        <div className="rounded-lg bg-gray-50 p-4">
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="w-full rounded-md bg-white p-1 md:w-1/2">
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
              <h1 className="text-3xl font-bold">
                Association of Computing Machinery
              </h1>
              <div>
                <p className="">Description and overview of ACM goes here..</p>
                <p>
                  This can be a long or a short description, it doesn&apos;t
                  really matter that much.
                </p>
              </div>
            </div>
          </div>
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
