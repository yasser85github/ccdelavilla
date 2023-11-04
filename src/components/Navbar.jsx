"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { BiChevronRight } from "react-icons/bi";

const links = [
  { id: 3, title: "Blog", url: "/" },
  { id: 2, title: "Nosotros", url: "/" },
  { id: 4, title: "Contáctenos", url: "/" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const openMenu = () => {
    setNavOpen(true);
  };

  const closeMenu = () => {
    setNavOpen(false);
  };

  return (
    <>
      <header className="py-7 bg-orange-700">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            {/*logo*/}
            <div>
              <Link href="/">
                <Image src="/logo1.png" alt="logo" width={70} height={70} />
              </Link>
            </div>
            {/*LINKS*/}
            <div className="hidden lg:block text-center">
              <ul className="flex space-x-7 text-white">
                {links.map((item) => (
                  <li key={item.id}>
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* CTA */}
            <div>
              <Link
                href="#"
                className="hidden px-5 py-4 bg-primary text-white rounded-lg lg:inline-block"
              >
                Comenzar
              </Link>
              <button className="block lg:hidden" onClick={openMenu}>
                <HiBars3 className="text-3xl text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/*  for Mobile/Tablet Devices Nav Menu  */}
      <div
        className={
          navOpen
            ? "block fixed py-0 w-screen z-[9999]"
            : "hidden fixed py-0  w-screen z-[9999]"
        }
      >
        <div
          className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50"
          onClick={closeMenu}
        ></div>
        <div className="bg-white fixed top-0 right-0 z-[9999] w-[380px] h-screen ">
          <div className="h-14 px-10 border-b flex items-center">
            <button className="flex items-center space-x-3" onClick={closeMenu}>
              <GrClose />
              <span>Cerrar</span>
            </button>
          </div>

          <div className="h-full py-3 px-10 pb-20  overflow-y-scroll scroll-smooth ">
            <ul className="block mb-7">
              {links.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className="group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary"
                  >
                    <span>{item.title}</span>
                    <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                      <BiChevronRight className="text-xl" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
