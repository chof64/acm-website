import React from "react";
import Image from "next/image";
import Link from "next/link";

import Platform from "/src/components/Platform";
import { classMerge } from "/src/utils/classMerge";

export default function Header({ className }) {
  return (
    <Platform className={classMerge("", className)}>
      <div className="rounded-md bg-white">
        <div className="md:flex md:justify-between md:gap-x-2">
          <div className="rounded-lg md:min-w-[40%] md:max-w-[40%]">
            <div className="relative aspect-[982/533] w-full shadow">
              <Image
                className="rounded-lg"
                src="/images/acm-banner.jpg"
                layout="fill"
                objectFit="cover"
                priority
                alt="ACM Banner Logo"
              />
            </div>
          </div>
          <div className="mt-5 flex flex-col justify-between md:mt-0">
            <div>
              <h1 className="text-3xl font-extrabold md:text-4xl">
                Association of Computing Machinery
              </h1>
              <div className="mt-2">
                <p>
                  Association of Computer Machinery, known by its initials, is
                  one of the academic organizations in the Department of
                  Computer Studies of the University of Antique. Lead by elected
                  student leaders. The organization hosts events that enhance
                  students&apos; technical skills, as well as promote leadership
                  and teamwork.
                </p>
              </div>
            </div>
            <div>
              <Link href="/">
                <a>
                  <button className="h-10 w-full rounded-md border border-orange-500 bg-white font-bold hover:bg-orange-200">
                    Learn more about us
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Platform>
  );
}
