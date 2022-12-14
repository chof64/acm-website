import { forwardRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import {
  Menu as MenuIcon,
  X as XIcon,
  ExternalLink as ExternalLinkIcon,
} from "lucide-react";

import { items } from "/config/items.navigation.config.js";
import Platform from "./Platform";
import TrayPlatform from "./navigation/TrayPlatform";
import { classMerge } from "/src/utils/classMerge";
import { getConfig } from "/src/utils/getConfig";

const _navigationItems = items;

const _navigationInternal = getConfig({
  key: "group",
  value: "Pages",
  config: items,
});

export default function Navigation() {
  const router = useRouter();
  const isActive = (href) => {
    return router.asPath === href;
  };

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

  return (
    <Menu as="div">
      {({ open }) => (
        <>
          <div className="items-cetner flex select-none justify-center bg-white">
            <Platform>
              <div className="flex items-center justify-between py-3">
                <Link href="/">
                  <a className="flex cursor-pointer items-center gap-x-1 hover:text-orange-500">
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
                      <h1 className="flex flex-col text-lg font-extrabold uppercase leading-tight">
                        Association of <span>Computing Machinery</span>
                      </h1>
                    </div>
                  </a>
                </Link>
                <nav className="flex items-center gap-x-5">
                  {_navigationInternal.items
                    .filter((item) => item.pin)
                    .map((item) => (
                      <MenuLink
                        className={classMerge(
                          "hidden rounded-lg font-bold md:block ",
                          isActive(item.href)
                            ? "text-orange-500 hover:text-orange-700"
                            : "text-neutral-500 hover:text-neutral-700"
                        )}
                        href={item.href}
                        key={item.name}
                      >
                        {item.name}
                      </MenuLink>
                    ))}
                  <Menu.Button
                    as="div"
                    className="flex cursor-pointer items-center justify-center rounded-md border border-orange-500 p-1 text-orange-500 hover:border-orange-700 hover:text-orange-700 md:p-0.5"
                  >
                    {open ? (
                      <XIcon className="h-7 w-7 stroke-[3] text-red-500" />
                    ) : (
                      <MenuIcon className="h-7 w-7 stroke-[2]" />
                    )}
                  </Menu.Button>
                </nav>
              </div>
            </Platform>
          </div>
          <div className="absolute w-full">
            <div className="absolute mt-8 flex w-full justify-center">
              <TrayPlatform>
                <Menu.Items
                  as="div"
                  className="flex max-h-[55vh] flex-col gap-y-2.5 overflow-auto rounded-lg border-2 border-orange-600 bg-white p-2 shadow focus:outline-none md:p-4"
                >
                  {_navigationItems.map((group) => (
                    <div key={group.group}>
                      <h2 className="text-xs font-medium text-orange-600">
                        {group.group}
                      </h2>
                      <div className="mt-1 flex flex-col gap-y-1">
                        {group.items.map((item) => (
                          <Menu.Item key={item.name}>
                            <MenuLink
                              href={item.href}
                              external={item.external}
                              className={classMerge(
                                "inline-flex items-center rounded border px-4 py-2.5 align-middle text-sm font-semibold tracking-wide md:text-base",
                                isActive(item.href)
                                  ? "border-orange-600 bg-orange-600 text-white shadow"
                                  : "border-orange-500/0 text-neutral-500 hover:border-orange-500 hover:bg-orange-100 hover:text-orange-500"
                              )}
                            >
                              {item.icon ? (
                                <div className="relative mr-2 h-4 w-4">
                                  <Image
                                    src={item.icon}
                                    layout="fill"
                                    alt={item.name}
                                  />
                                </div>
                              ) : null}
                              {item.name}
                              {item.external ? (
                                <ExternalLinkIcon className="ml-1 h-3 w-3 stroke-sky-500" />
                              ) : null}
                            </MenuLink>
                          </Menu.Item>
                        ))}
                      </div>
                    </div>
                  ))}
                </Menu.Items>
              </TrayPlatform>
            </div>
            <div
              className={classMerge(
                open
                  ? "fixed inset-0 -z-50 h-full w-full bg-white/20 backdrop-blur"
                  : null
              )}
            />
          </div>
        </>
      )}
    </Menu>
  );
}
