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
          pin: true,
        },
        {
          name: "About",
          href: "/#about",
          pin: true,
        },
        {
          name: "Announcements",
          href: "/#announcements",
          pin: true,
        },
        {
          name: "Blog",
          href: "/#blog",
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
        {
          name: "Twitter",
          href: "https://twitter.com",
          external: true,
        },
        {
          name: "Instagram",
          href: "https://instagram.com",
          external: true,
        },
      ],
    },
  ];

  const pinnedItems = NAVIGATION.map((group) => {
    return group.items.filter((item) => item.pin);
  }).flat();

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
              <div className="flex cursor-pointer items-center gap-x-1">
                <Link href="/">
                  <>
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
                  </>
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="mr-6 hidden items-center justify-center gap-x-4 lg:flex">
                  {pinnedItems.map((item) => (
                    <MenuLink
                      key={item.name}
                      href={item.href}
                      className="uppercase text-black underline-offset-2 hover:text-cyan-600 hover:underline"
                    >
                      {item.name}
                    </MenuLink>
                  ))}
                </div>
                <Menu.Button>
                  {open ? (
                    <div className="flex flex-col items-center justify-center rounded-md border bg-red-100 p-1 text-neutral-600">
                      <XIcon className="h-8 w-8" />
                      {/* <p className="text-[0.5rem] uppercase leading-none">
                        Menu
                      </p> */}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center rounded-md border p-1 text-neutral-600 hover:bg-cyan-100">
                      <MenuIcon className="h-8 w-8" />
                      {/* <p className="text-[0.5rem] uppercase leading-none">
                        Menu
                      </p> */}
                    </div>
                  )}
                </Menu.Button>
              </div>
            </div>
          </Platform>
          <div className="absolute w-full">
            <div className="absolute mt-8 flex w-full justify-center">
              {/* // TODO: Adjust tray sizes across different viewports. */}
              <Menu.Items
                as="div"
                className="flex max-h-[55vh] w-[95vw] flex-col gap-y-2.5 overflow-auto rounded-lg border border-neutral-300 bg-gray-100 p-2 shadow-md shadow-gray-200/50 focus:outline-none md:w-[70vw] md:p-4 lg:w-[50vw]"
              >
                {NAVIGATION.map((group) => (
                  <div key={group.group}>
                    <h2 className="text-xs font-bold uppercase text-gray-400">
                      {group.group}
                    </h2>
                    <div className="mt-1 flex flex-col gap-y-1">
                      {group.items.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <MenuLink
                              href={item.href}
                              external={item.external}
                              className={classMerge(
                                "flex items-center gap-x-2 rounded-md bg-white px-4 py-3 font-bold",
                                active ? "bg-neutral-100 text-teal-600" : null
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
