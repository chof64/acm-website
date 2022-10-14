import React, { forwardRef } from "react";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import Link from "next/link";

import Platform from "./Platform";

import { classMerge } from "/src/utils/TailwindUtilities";

export default function Navigation() {
  const NAVIGATION = [
    {
      group: "Pages",
      items: [
        {
          name: "Home",
          href: "/",
        },
        {
          name: "About",
          href: "/#about",
        },
        {
          name: "Contact",
          href: "/#contact",
        },
      ],
    },
    {
      group: "External",
      items: [
        {
          name: "Facebook",
          href: "https://facebook.com",
          external: true,
        },
      ],
    },
  ];

  const MenuLink = forwardRef((props, ref) => {
    MenuLink.displayName = "MenuLink";
    let { external = false, href, children, ...rest } = props;

    if (external) {
      return (
        <a
          href={href}
          ref={ref}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href}>
        <a ref={ref} {...rest}>
          {children}
        </a>
      </Link>
    );
  });

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
                {NAVIGATION.map((group) => (
                  <div key={group.group}>
                    <h2 className="font-bold uppercase text-neutral-600">
                      {group.group}
                    </h2>
                    <div className="flex flex-col gap-y-2">
                      {group.items.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <MenuLink
                              href={item.href}
                              external={item.external}
                              className={classMerge(
                                "flex items-center gap-x-2 rounded-md px-2 py-1",
                                active
                                  ? "bg-neutral-100 text-teal-600"
                                  : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-600"
                              )}
                            >
                              {item.name}
                            </MenuLink>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </div>
                ))}
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
