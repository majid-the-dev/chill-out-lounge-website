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
                White rice and stew beef
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 4,000
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
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Poundo and egusi + goat meat
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Poundo and egusi + beef
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 4,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Poundo and egusi + chicken
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 6,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Poundo and vegetable + goat meat
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Poundo and vegetable + beef
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 4,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Poundo and vegetable + chicken
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 6,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Poundo and ogbono + chicken
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 6,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Poundo and ogbono + goat meat
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Poundo and ogbono + beef
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 4,000
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Extra
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Rice</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 2,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Plantain</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Chicken</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 3,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Fish</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 4,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Turkey</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 4,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Beef</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 2,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Goat meat</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 4,000
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Finger Food
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Asun</p>

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
              <p className="text-white/90 text-sm font-semibold">
                Pepper turkey
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Turkey pepper soup and yam
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Goat meat pepper soup
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
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
              <p className="text-white/90 text-sm font-semibold">Nkwobi</p>

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
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Grill and Suya
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Ram suya</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 2,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Beef suya small
              </p>

              <p className="text-white/90 text-sm font-semibold">&#8358; 500</p>
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
              <p className="text-white/90 text-sm font-semibold">Guinea fowl</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 12,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Chicken suya
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 12,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Assorted suya small
              </p>

              <p className="text-white/90 text-sm font-semibold">&#8358; 500</p>
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
              Barbeque
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">BBQ Fish</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 10,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">BBQ Chicken</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 3,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Chips</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
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
              <p className="text-white/90 text-sm font-semibold">
                Shawarma + 2 sausage
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 3,000
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Beers
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                33 Export Lager Beer Bottle 60cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Desperados original beer BOT 45CL
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Flying fish zesty lemon premium beer 420ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Goldberg black beer bottle 45cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Goldberg premium lager beer bottle 60cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Guinness extra stout big 600ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Guinness extra stout medium 450ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Guinness extra stout small 325ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Guinness smooth 450ml BOT
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Guilder ultimate beer bottle 60cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Heineken lager beer 60cl bottle
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Star lager beer 60cl bottle
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Star radler citrus 33cl can
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Trophy premium lager beer 600ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Trophy stout 600ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Budweiser beer
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Orijin beer big
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 3,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Legend big</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,500
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Soft Drinks & Water
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Coca Cola pet 50cl
              </p>

              <p className="text-white/90 text-sm font-semibold">&#8358; 600</p>
            </div>

            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Eva water 75cl
              </p>

              <p className="text-white/90 text-sm font-semibold">&#8358; 500</p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Fanta orange 35cl
              </p>

              <p className="text-white/90 text-sm font-semibold">&#8358; 600</p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Fayrouz pineapple 33cl bottle
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Sprite soft drink pet 50cl
              </p>

              <p className="text-white/90 text-sm font-semibold">&#8358; 600</p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Pepsi</p>

              <p className="text-white/90 text-sm font-semibold">&#8358; 600</p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Schweppes drink
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Juices & Non-alcoholics
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                5Alive Berry blast drink 78cl pet
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 3,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Chi active carrot/orange 1LT
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 3,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Chi exotic pineapple & coconut 1LT
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 3,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Hollandia youghurt plain sweetened 1lt
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 3,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Hollandia youghurt strawberry 1lt
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 3,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Malta guinness drink 330ml bottle
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Maltina</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Stute cranbery juice 1.5lt
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 8,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Vitamilk soyamilk bottle glass 300ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 2,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Chamdor sparkling white grape drink 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 12,000
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Energy drinks
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Black bullet vodka mixed drink 250ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 3,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Monster energy drink can 440ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 2,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Power horse energy 355ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 3,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Power horse energy drink 250ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 2,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Red bull energy drink 250ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 2,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Fearless energy drink
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Black stallion energy drink
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 2,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Predator energy drink
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,500
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Cocktail
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">PINA COLADA</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                VIERGIN COLADA
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 4000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">LONG ISLAND</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                TEQUILA SUNRISE
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 4,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                VIRGIN SUNSET
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 3,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                FROZEN STRAWBERRY MAGARITTA
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                CLASSIC MAGARITTA
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">CHAPMAN</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 3,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">BLUE LAGOON</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">BLUE HAWAII</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Spirit mixed drinks & bitters
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Flirt vodka
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 14,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Hunter&apos;s gold 330ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 2,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Orijin bitters herbal drink 20cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 2,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Orijin bitters spirit drink 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 12,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Orijin spirit mixed drink 60cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 2,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Ace bitters</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Odogwu bitters
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Smirnoff ice bottle 300ml/330ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Smirnoff ice double black with Guarana bottle 300ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Smirnoff ice spirit mixed drink 60cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,500
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Red Wines
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                4th street sweet red 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 12,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Agor liquor red wine 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 15,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Apothic red 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 20,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                B & G Barton & Guestier Merlot 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 12,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Carlo rossi california red 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 15,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Cartier premium red wine 75cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 12,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Declan de espana sweet red wine 37.5cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 10,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Dorado spanish red wine 75cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 12,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Drostdy hot red claret 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 12,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Eisberg cabernet sauvignon 75cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 15,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Escudo rojo chile red wine 75cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 35,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Toma red wine 75cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 10,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Thomas barton reserve bordeaux wine 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 25,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Dominion spanish red wine
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 8,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Rich lady red wine
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 8,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Drostdy hof red wine
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 6,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Castillo red wine
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 10,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Carlo rossi red wine
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 10,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Four cousins red wine
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 10,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                4th street red wine
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 10,000
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              White Wines
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Castillo de espana white wine 75cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 10,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Four cousins natural sweet white 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 15,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Castillo white wine
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 10,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Four cousins white wine
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 10,000
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Sparkling & champagne
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Andre brut 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 15,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Andre rose 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 15,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Martini sparkling rose 75cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 25,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Martini sparkling brut 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 25,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Moet & Chandon ice imperial 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 220,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Moet & Chandon imperial brut 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 150,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Moet & Chandon nectar imperial blanc champagne 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 170,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Moet & Chandon nectar imperial rose champagne 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 170,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Veuve clicquot champagne brut 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 180,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Veuve clicquot champagne rose wine 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 220,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Veuve du vernay ice rose wine 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 20,000
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Shots
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Tequila shot
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 2,500
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Hennessy vs shot
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 3,500
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Cream
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Barleys big</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 25,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Barleys small
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 10,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Best cream big
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 15,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Best cream small
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 7,000
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Whiskies
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Best classic whisky 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 12,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Glenfiddich 12 years malt scotch whisky 700ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 85,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Glenfiddich 15 years single malt whisky 700ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 120,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Glenfiddich 18 years malt scotch whisky 700ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 200,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Glenfiddich 21 years scotch whisky
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 400,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Jack daniels tennessee honey whiskey 70cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 35,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Jack daniels whiskey 70cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 40,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Jameson black barrel irish whiskey 700ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 55,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Jameson irish whiskey 700ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 40,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Johnnie walker black label scotch whiskey 70cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 55,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Johnnie walker blue label whiskey 700ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 300,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Johnnie walker gold label reserve 70cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 75,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Johnnie walker red label scotch whiskey 70cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 25,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Monkey shoulder malt scotch whiskey 700ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 60,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                The famous grouse 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 25,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Wild turkey 101 75cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 25,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                William Lawson&apos;s scotch whiskey 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 25,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Jameson small
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 7,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Best whiskey small
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                William Lawson&apos;s small
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 7,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Imperial blue small
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">Jekonmo</p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 1,500
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
                William Lawson&apos;s Big
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 35,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Best whiskey Big
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 15,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Campari small
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 5,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Hennessy VS big
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
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Cognacs & brandy
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Hennessy V.S.O.P Cognac wine 70cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 170,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Hennessy VS Cognac 70cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 95,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Hennessy XO 70cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 500,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Martell blue swift 750ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 150,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Martell VS single distillery fine cognac 70cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 75,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Remy martin 1738 70cl/75cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 120,000
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Vodkas
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Bacardi carta blanca 75cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 25,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Ciroc red berry vodka 1lt
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 45,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Skyy infusion citrus vodka 1l
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 20,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Smirnoff intense chocolate vodka 75cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 10,000
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-28">
            <h1 className="cursive text-yellow-400 text-4xl md:text-5xl ml-0 md:-ml-10 mb-4">
              Rums & Liquors
            </h1>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Amarula marula fruit cream 375ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 9,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Amarula marula fruit cream 70cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 15,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Bacardi gold rum 70cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 30,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Baileys the original irish cream 700ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 35,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Jagermeister herbal liquor 70cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 25,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Kuemmerling herbal liquor 35% vol 0.7l
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 15,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Sierra tequila blanco 70cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 25,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Sierra tequila reposado 70cl
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 25,000
              </p>
            </div>
            <div className="flex items-center justify-between uppercase">
              <p className="text-white/90 text-sm font-semibold">
                Silver patron tequila 700ml
              </p>

              <p className="text-white/90 text-sm font-semibold">
                &#8358; 70,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
