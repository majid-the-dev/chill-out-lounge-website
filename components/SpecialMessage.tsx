import Image from "next/image";
// import BackgroundImage from "@/public/assets/asset-2-1.jpg";
// import Scroll from "@/public/assets/asset-3.png";
import { IoLocationSharp } from "react-icons/io5";
// import { MdLocalPhone } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";
import { LuLink } from "react-icons/lu";
// import { BsClockFill } from "react-icons/bs";
// import Logo from "@/public/assets/chill-out-logo.png";
import Link from "next/link";
import Fries from "@/public/assets/asset-6.png";
import Drink from "@/public/assets/asset-7.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

interface SpecialMessageProps {
  onBackToTopClick: () => void;
}

const SpecialMessage: React.FC<SpecialMessageProps> = (
  {
    // onBackToTopClick,
  }
) => {
  const prop1Ref = useRef(null);
  const prop2Ref = useRef(null);
  const prop3Ref = useRef(null);
  const prop4Ref = useRef(null);
  const prop5Ref = useRef(null);
  const prop6Ref = useRef(null);
  const prop7Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger?.create({
      trigger: prop1Ref.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        prop1Ref.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.45, duration: 2 }
      ),
    });

    ScrollTrigger?.create({
      trigger: prop2Ref.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        prop2Ref.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.75, duration: 2 }
      ),
    });

    ScrollTrigger?.create({
      trigger: prop3Ref.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        prop3Ref.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, delay: 1, duration: 2 }
      ),
    });

    ScrollTrigger?.create({
      trigger: prop4Ref.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        prop4Ref.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, delay: 1.3, duration: 2 }
      ),
    });

    ScrollTrigger?.create({
      trigger: prop5Ref.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        prop5Ref.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, delay: 1.6, duration: 2 }
      ),
    });

    ScrollTrigger?.create({
      trigger: prop6Ref.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        prop6Ref.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, delay: 0.15, duration: 2 }
      ),
    });

    ScrollTrigger?.create({
      trigger: prop7Ref.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        prop7Ref.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, delay: 0.15, duration: 2 }
      ),
    });
  }, []);

  return (
    <div className="relative bg-black h-screen overflow-hidden">
      <Image
        ref={prop7Ref}
        alt="Chill Out"
        src={Fries}
        className="absolute md:h-[23rem] md:w-[38rem] opacity-30 -bottom-36 md:-bottom-44 -right-14 md:-right-16"
      />
      <Image
        ref={prop6Ref}
        alt="Chill Out"
        src={Drink}
        className="absolute h-[19rem] md:h-[23rem] w-[17rem] md:w-[21rem] opacity-30 -bottom-28 -left-28 md:-left-32"
      />
      <div className="h-full w-full max-w-7xl mx-auto flex flex-col items-start justify-center overflow-hidden px-5">
        <p
          ref={prop1Ref}
          className="heading text-white/90 text-base md:text-2xl font-bold uppercase"
        >
          From Naija-inspired delicacies to continental classics, <br /> {""}{" "}
          we&apos;ve got the perfect dish to make your day
        </p>
        <p
          ref={prop2Ref}
          className="heading text-white/50 text-sm font-bold uppercase mt-8"
        >
          And don&apos;t worry—our <span className="text-white">vibes</span> are
          so <span className="text-white">smooth</span>, <br /> you&apos;ll
          forget about the traffic outside
        </p>
        <div
          ref={prop3Ref}
          className="flex items-center gap-5 text-white/90 mt-8"
        >
          <Link href={"/"}>
            <AiFillInstagram size={22} />
          </Link>
          <Link href={"/"}>
            <IoLogoWhatsapp size={20} />
          </Link>
          <Link href={"/"}>
            <FaSquareFacebook size={19} />
          </Link>
        </div>
        <div className="ml-0 m-20 md:self-end">
          <div
            ref={prop4Ref}
            className="heading flex items-center gap-1.5 text-white/90 text-xs md:text-sm font-bold uppercase"
          >
            <IoLocationSharp size={18} />
            48 Alagbole Akute Road, Alagbole
          </div>
          <div
            ref={prop5Ref}
            className="heading flex items-center gap-2 text-white/90 text-xs md:text-sm font-bold uppercase md:justify-end mt-3"
          >
            <LuLink size={18} />
            WWW.CHILLOUT.NG
          </div>
        </div>
        {/* <Image
          alt="Special Message"
          src={BackgroundImage || "/placeholder.svg"}
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        /> */}
        {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="col-span-1 relative z-10 text-center flex flex-col gap-8">
            <div className="heading flex items-center gap-2 text-white/90 text-sm font-semibold uppercase">
              <BsClockFill size={14} />
              10AM - 9PM
            </div>
            <div className="heading flex items-center gap-1.5 text-white/90 text-sm font-semibold uppercase">
              <IoLocationSharp size={18} />
              48 Alagbole Akute Road, Alagbole
            </div>
            <div className="heading flex items-center gap-2 text-white/90 text-sm font-semibold uppercase">
              <MdLocalPhone size={18} />
              08177155159 / 09116769360
            </div>
            <div className="heading flex items-center gap-2 text-white/90 text-sm font-semibold uppercase">
              <AiFillInstagram size={18} />
              CHILLOUTLOUNGE365
            </div>
            <div className="heading flex items-center gap-2 text-white/90 text-sm font-semibold uppercase">
              <LuLink size={18} />
              WWW.CHILLOUT.NG
            </div>
          </div>
          <div className="relative col-span-1 h-[59vh]">
            <Image
              alt="Special Message"
              src={Scroll || "/placeholder.svg"}
              layout="fill"
              objectFit="cover"
              className=""
            />
            <div className="bg-white/5 flex flex-col items-center justify-center gap-5 h-full">
              <div className="nav text-white/90 text-sm sm:text-xl font-semibold uppercase">
                FOOD
              </div>
              <div className="nav text-white/90 text-sm sm:text-xl font-semibold uppercase">
                DRINKS
              </div>
              <div className="nav text-white/90 text-sm sm:text-xl font-semibold uppercase">
                WINES
              </div>
              <div className="nav text-white/90 text-sm sm:text-xl font-semibold uppercase">
                DESSERTS
              </div>
              <div className="nav text-white/90 text-sm sm:text-xl font-semibold uppercase">
                RELAXATION
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end">
            <Image src={Logo} alt="Logo" className="size-80" />
          </div>
        </div> */}
      </div>
      {/* <div className="w-full absolute bottom-14">
        <div className="w-full max-w-7xl mx-auto flex items-center gap-5 text-white/50 text-sm font-bold uppercase whitespace-nowrap heading">
          <hr className="w-full border-[0.3px] border-white/30" />
          <span className="cursor-pointer" onClick={onBackToTopClick}>
            Back to Top
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default SpecialMessage;
