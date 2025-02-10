import type React from "react";
import Image from "next/image";
import BackgroundImage from "@/public/assets/asset-1.jpg";
// import Fork from "@/public/assets/fork-icon.png";
// import { RxArrowDown } from "react-icons/rx";
import { PiBowlFood } from "react-icons/pi";
import { IoWineOutline } from "react-icons/io5";
import { FaGripfire } from "react-icons/fa6";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
// import { BsClockFill } from "react-icons/bs";
import { BsMouse } from "react-icons/bs";
// import Element from "@/public/assets/asset-8.png";

interface HeroProps {
  onScrollClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollClick }) => {
  const headerRef = useRef(null);
  const subHeaderRef = useRef(null);
  const hoursRef = useRef(null);
  const prop1Ref = useRef(null);
  const prop2Ref = useRef(null);
  const prop3Ref = useRef(null);
  const prop4Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger?.create({
      trigger: headerRef.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        headerRef.current,
        { y: -25, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.5, duration: 2 }
      ),
    });

    ScrollTrigger?.create({
      trigger: subHeaderRef.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        subHeaderRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.8, duration: 1.5 }
      ),
    });

    ScrollTrigger?.create({
      trigger: hoursRef.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        hoursRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, delay: 1.1, duration: 1.5 }
      ),
    });

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
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.2, duration: 1.5 }
      ),
    });

    ScrollTrigger?.create({
      trigger: prop3Ref.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        prop3Ref.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.2, duration: 1.5 }
      ),
    });

    ScrollTrigger?.create({
      trigger: prop4Ref.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        prop4Ref.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, delay: 1.4, duration: 1.5 }
      ),
    });
  }, []);

  return (
    <div className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <h1
        ref={prop2Ref}
        className="heading absolute shadow-text text-9xl font-extrabold -bottom-4 left-0"
      >
        CHOW
      </h1>
      <h1
        ref={prop1Ref}
        className="heading absolute shadow-text text-9xl font-extrabold top-28 right-0"
      >
        DELICIOUS
      </h1>
      <h1
        ref={prop3Ref}
        className="heading absolute shadow-text-2 text-8xl font-extrabold bottom-0 right-0"
      >
        SPICY
      </h1>
      <Image
        alt="Chill Out"
        src={BackgroundImage || "/placeholder.svg"}
        layout="fill"
        objectFit="cover"
        className="opacity-15"
      />
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mt-4 md:mt-12">
          {/* <Image src={Element} alt="chill_out" className="absolute size-48 -top-24 -left-28 rotate-45" /> */}
          <h1
            ref={headerRef}
            className="heading heading-shadow text-7xl md:text-9xl text-center font-extrabold uppercase px-5 md:px-0 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 inline-block text-transparent bg-clip-text"
          >
            chill <br /> out
          </h1>
        </div>
        <div
          ref={subHeaderRef}
          className="heading flex items-center gap-6 text-white/90 text-sm sm:text-base font-bold uppercase mt-10"
        >
          <div className="flex items-center gap-1">
            <PiBowlFood size={20} />
            <p>Eat</p>
          </div>
          <div className="flex items-center gap-1">
            <IoWineOutline size={20} />
            <p>Sip</p>
          </div>
          <div className="flex items-center gap-1">
            <FaGripfire size={20} />
            <p>Chill Out</p>
          </div>
        </div>
        <div
          ref={hoursRef}
          className="heading flex items-center gap-2 text-white/90 text-sm sm:text-base font-bold uppercase mt-6"
        >
          {/* <BsClockFill size={14} /> */}
          10AM - 9PM DAILY
        </div>
      </div>
      <button
        onClick={onScrollClick}
        ref={prop4Ref}
        className="heading flex flex-col items-center gap-2 absolute left-1/2 -translate-x-1/2 text-white/80 bottom-6 text-xs font-bold uppercase cursor-pointer"
      >
        <BsMouse size={20} />
        click to scroll
      </button>
    </div>
  );
};

export default Hero;
