"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { IoClose } from "react-icons/io5";
// import { TbMenu4 } from "react-icons/tb";
import { TbMenu } from "react-icons/tb";
import Logo from "@/public/assets/chill-out-logo.png";
import Image from "next/image";

const MobileSidebar = () => {
  // const pathname = usePathname();
  const [sidebar, setSidebar] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const prop1Ref = useRef(null);
  const prop2Ref = useRef(null);
  const prop3Ref = useRef(null);

  const openSidebar = () => {
    setAnimationClass("animate__animated animate__fadeInLeft");
    setSidebar(true);
  };

  const closeSidebar = () => {
    setAnimationClass("animate__animated animate__fadeOutLeft");
    setTimeout(() => {
      setSidebar(false);
    }, 650);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger?.create({
      trigger: prop1Ref.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        prop1Ref.current,
        { y: -25, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.2, duration: 1.5 }
      ),
    });

    ScrollTrigger?.create({
      trigger: prop2Ref.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        prop2Ref.current,
        { y: -25, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.2, duration: 1.5 }
      ),
    });

    ScrollTrigger?.create({
      trigger: prop3Ref.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        prop3Ref.current,
        { y: -25, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.2, duration: 1.5 }
      ),
    });
  }, []);

  return (
    <div className="block md:hidden !z-[9999999999999999]">
      <button onClick={openSidebar}>
        <TbMenu color="#FEE45B" size={22} />
      </button>

      {sidebar && (
        <div className="bg-black/75 fixed inset-0 z-[99999] h-[100vh] top-0">
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative bg-black/95 w-full h-full p-4 overflow-y-scroll ${animationClass}`}
          >
            <div className="flex items-center justify-between">
              <Link href={"/"}>
                <Image
                  src={Logo}
                  alt="Logo"
                  className="size-12 md:size-20 mt-4"
                />
              </Link>
              <button onClick={closeSidebar} className="text-lg text-white/90">
                <IoClose />
              </button>
            </div>
            <div className="h-full flex flex-col items-center justify-center gap-8 text-white/90 text-xl font-bold heading -mt-20">
              <Link
                href={"/"}
                ref={prop1Ref}
                onClick={closeSidebar}
                // className={`nav-item ${pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>
              <Link
                href={"/menu"}
                ref={prop2Ref}
                onClick={closeSidebar}
                // className={`nav-item ${pathname === "/menu" ? "active" : ""}`}
              >
                Menu
              </Link>
              <Link
                href={"/reservation"}
                ref={prop3Ref}
                onClick={closeSidebar}
                // className={`nav-item ${
                //   pathname === "/reservation" ? "active" : ""
                // }`}
              >
                Reservation
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
