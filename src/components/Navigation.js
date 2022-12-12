import React, { forwardRef } from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

import { items } from "/config/items.navigation.config";
import Platform from "/src/components/Platform";
import { classMerge } from "/src/utils/classMerge";
import { getConfig } from "/src/utils/getConfig";

const _navigationItems = items;
const _navigationInternal = getConfig({
  key: "group",
  value: "Pages",
  config: items,
});

export default function Navigation() {
  return (
    <Menu as="div" className="absolute w-full">
      {({ open }) => (
        <>
          <Platform>
            <div className="flex items-center justify-between">
              <Link href="/">
                <a className="flex items-center justify-center gap-x-1">
                  <div className="relative aspect-square w-16">
                    <Image
                      src="/images/ccs-logo.png"
                      priority
                      layout="fill"
                      objectFit="cover"
                      alt="CCS Logo"
                    />
                  </div>
                  <div className="border-l-2 border-l-white py-1.5 px-1">
                    <h1 className="flex flex-col text-lg font-extrabold uppercase leading-tight text-white">
                      Association of <span>Computing Machinery</span>
                    </h1>
                  </div>
                </a>
              </Link>
              <nav className="space-x-6">
                {_navigationInternal.items.map((item) => (
                  <MenuLink
                    className="text-white underline-offset-4 hover:font-semibold hover:underline"
                    href={item.href}
                    key={item.name}
                  >
                    {item.name}
                  </MenuLink>
                ))}
              </nav>
            </div>
          </Platform>
        </>
      )}
    </Menu>
  );
}

const MenuLink = forwardRef((props, ref) => {
  MenuLink.displayName = "MenuLink";
  let { href, children, ...rest } = props;

  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});
