import React, { forwardRef, useState, useEffect } from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";

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
  let [isOpaque, setIsOpaque] = useState(false);

  useEffect(() => {
    let offset = 100;
    function onScroll() {
      if (!isOpaque && window.scrollY > offset) {
        setIsOpaque(true);
      } else if (isOpaque && window.scrollY <= offset) {
        setIsOpaque(false);
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, [isOpaque]);

  return (
    <Menu
      as="div"
      className={classMerge(
        "absolute w-full",
        isOpaque ? "bg-white/90 shadow-md backdrop-blur" : ""
      )}
    >
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
                  <div
                    className={classMerge(
                      "border-l-2 py-1.5 px-1",
                      isOpaque ? "border-l-black" : "border-l-white"
                    )}
                  >
                    <h1
                      className={classMerge(
                        "flex flex-col text-lg font-extrabold uppercase leading-tight",
                        isOpaque ? "text-black" : "text-white"
                      )}
                    >
                      Association of <span>Computing Machinery</span>
                    </h1>
                  </div>
                </a>
              </Link>
              <nav className="space-x-10">
                <div className="hidden space-x-8 md:block">
                  {_navigationInternal.items.map((item) => (
                    <MenuLink
                      className={classMerge(
                        " underline-offset-4 hover:font-semibold hover:underline",
                        isOpaque ? "text-black" : "text-white"
                      )}
                      href={item.href}
                      key={item.name}
                    >
                      {item.name}
                    </MenuLink>
                  ))}
                </div>
                <Menu.Button as="div" className="md:hidden">
                  {open ? (
                    <XIcon
                      className={classMerge(
                        "h-10 w-10",
                        isOpaque ? "text-black" : "text-white"
                      )}
                    />
                  ) : (
                    <MenuIcon
                      className={classMerge(
                        "h-10 w-10",
                        isOpaque ? "text-black" : "text-white"
                      )}
                    />
                  )}
                </Menu.Button>
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
