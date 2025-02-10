"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/chill-out-logo.png";
import MobileSidebar from "./MobileSidebar";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger?.create({
      trigger: mainRef.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        mainRef.current,
        { y: -25, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.5, duration: 2 }
      ),
    });
  }, []);

  return (
    <div>
      <div
        ref={mainRef}
        className="w-full max-w-7xl mx-auto flex items-center justify-between px-5 py-5 md:py-8"
      >
        <div className="flex items-center gap-3">
          <Link href={"/"}>
            <Image src={Logo} alt="Logo" className="size-16 md:size-20 mt-4" />
          </Link>
        </div>
        <ul className="heading sm:flex items-center gap-12 text-white/90 text-sm font-bold uppercase hidden">
          <li>
            <Link
              href={"/"}
              className={`nav-item ${pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/menu"}
              className={`nav-item ${pathname === "/menu" ? "active" : ""}`}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href={"/reservation"}
              className={`nav-item ${
                pathname === "/reservation" ? "active" : ""
              }`}
            >
              Reservation
            </Link>
          </li>
        </ul>
        <MobileSidebar />
      </div>
    </div>
  );
};

export default Navbar;
