import React from "react";
import BackgroundImage from "@/public/assets/asset-9.jpg";
import Image from "next/image";
import { BsDashLg } from "react-icons/bs";

const Page = () => {
  return (
    <div className="heading relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <Image
        alt="Chill Out"
        src={BackgroundImage || "/placeholder.svg"}
        layout="fill"
        objectFit="cover"
        className=""
      />
      <div className="relative w-full max-w-7xl mx-auto py-48">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-2">
            <BsDashLg color="white" size={25} className="-mt-5" />
            <p className="heading text-white/90 text-sm font-bold mb-5">
              CHEF DELIGHT
            </p>
            <BsDashLg color="white" size={25} className="-mt-5" />
          </div>
          <h1 className="heading heading-shadow text-4xl md:text-6xl !text-center font-extrabold uppercase px-5 md:px-0 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 inline-block text-transparent bg-clip-text">
            OUR MENU
          </h1>
        </div>
        <div className="w-full max-w-xl mx-auto mt-20 px-5">
          <div className="space-y-6">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Main course
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Jollof rice and chicken
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 6,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Jollof rice and goat meat
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Jollof rice and beef
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 4,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Fried rice and chicken
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 6,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Fried rice and goat meat
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Fried rice and beef
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 4,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                White rice and chicken
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 6,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                White rice and goat meat
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                White rice and stew beef
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 4,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Indomie and eggs
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 2,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Indomie and eggs
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 2,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Eba and egusi + beef
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 4,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Eba and egusi + goat meat
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Eba and egusi + chicken
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 6,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Semo and egusi + goat meat
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Semo and egusi + beef
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 4,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Semo and egusi + chicken
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 6,000
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Finger food
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Catfish pepper soup
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 10,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Croaker fish pepper soup
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 10,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Isiewu</p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 6,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Turkey pepper soup + yam
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Pepper turkey
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Nkwobi</p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 4,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Goat meat pepper soup
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 3,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Assorted pepper soup
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 3,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Indomie and eggs
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 2,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Pepper gizzard
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 2,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Asun</p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,500
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Barbeque
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">BBQ fish</p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 10,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">BBQ chicken</p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 3,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Shawarma + 2 sausage
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 3,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Shawarma + 1 sausage
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 2,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Chips</p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Grill
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Chicken suya
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 12,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Guinea fowl</p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 12,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Ram suya</p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 2,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Beef suya big
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Assorted suya big
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Spirit
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Martell blue swift
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 130,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Hennessy VS Big
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 80,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Jack Daniels Big
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 65,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Jameson Big</p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 35,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                William Lawson Big
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 35,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Andre Brut</p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 15,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Andre Rose</p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 15,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Jameson Small
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 7,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                William Lawson Small
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 7,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Campari Small
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Imperial blue Small
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                bEST WHISKEY Small
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Smirnoff ice Small
              </p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Jekonmo</p>
              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,500
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
