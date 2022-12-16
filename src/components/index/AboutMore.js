import React from "react";
import Link from "next/link";
import Image from "next/image";

import Platform from "/src/components/Platform";
import { classMerge } from "/src/utils/classMerge";

export default function AboutMore() {
  return (
    <Platform className="pt-16 pb-32">
      <h1 className="text-3xl font-bold md:text-4xl">Learn more about us</h1>
      <div className="mt-10 grid w-full grid-rows-3 gap-8 md:grid-cols-3 md:grid-rows-1">
        <div>
          <div className="select-none overflow-clip rounded bg-[url('/images/background/ua-main-gate.jpg')] bg-cover bg-center transition delay-75 duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
            <div className="px-10 py-2 backdrop-blur-sm">
              <div className="relative aspect-square w-full">
                <Image
                  priority
                  src="/images/ua-logo.png"
                  layout="fill"
                  objectFit="cover"
                  alt="University of Antique Logo"
                />
              </div>
            </div>
          </div>
          <h2 className="mt-2 text-center text-xl font-semibold md:text-2xl">
            About the University
          </h2>
        </div>
        <div>
          <div className="select-none overflow-clip rounded bg-[url('/images/background/ccs-building.jpg')] bg-cover bg-center transition delay-75 duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
            <div className="px-10 py-2 backdrop-blur-sm">
              <div className="relative aspect-square w-full">
                <Image
                  priority
                  src="/images/ccs-logo.png"
                  layout="fill"
                  objectFit="cover"
                  alt="College of Computer Studies Logo"
                />
              </div>
            </div>
          </div>
          <h2 className="mt-2 text-center text-xl font-semibold md:text-2xl">
            About the College
          </h2>
        </div>
        <Link href="/about">
          <a>
            <div className="select-none overflow-clip rounded bg-[url('/images/background/acm-acquaintance.jpg')] bg-cover bg-center transition delay-75 duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
              <div className="px-10 py-2 backdrop-blur-sm">
                <div className="relative aspect-square w-full">
                  <Image
                    priority
                    src="/images/acm-banner-square.png"
                    layout="fill"
                    objectFit="cover"
                    alt="University of Antique Logo"
                  />
                </div>
              </div>
            </div>
            <h2 className="mt-2 text-center text-xl font-semibold md:text-2xl">
              About the Organization
            </h2>
          </a>
        </Link>
      </div>
    </Platform>
  );
}
