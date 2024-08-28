"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosSearch, IoLogoAndroid } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { FaApple, FaRegComment, FaRegHeart, FaTwitter, FaDiscord } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { RxDotsHorizontal } from "react-icons/rx";
import { RiMenu2Fill } from "react-icons/ri";

export default function Home() {
  const [searchFor, setSearchFor] = useState("");
  return (
    <main className="flex flex-col max-h-[1460px]">
      {/* fixed z-[100] w-[97%] bg-[#171717] */}
      <header className="flex flex-row items-center mx-4 my-2 text-sm">
        <Link href="/" className="items-center text-center">
          <Image src="/decal33.jpg" alt="Home" width={36} height={36} className="border border-[#2C2C2C] rounded-sm shrink-0" />
        </Link>
        <Link href="/" className="hidden md:flex text-gray-100 ml-4 items-center text-center bg-[#2C2C2C] py-2 px-4 rounded-sm">Home</Link>
        <Link href="#" className="hidden md:flex text-gray-100 ml-1 items-center text-center hover:bg-[#2C2C2C] py-2 px-4 rounded-sm">Mints</Link>
        <div className="flex flex-row items-center ml-4 md:mx-auto text-gray-400 hover:border hover:border-black w-[85%] md:w-[40%] rounded bg-[#2C2C2C] px-4 py-2 placeholder-muted focus:shadow-sm focus:outline-none focus:ring-1 focus:ring-ring sm:text-sm">
          <IoIosSearch className="text-xl hover:text-black" />
          <input placeholder="Search" value={searchFor} onChange={(e) => { setSearchFor(e.target.value); }} className="ml-2 outline-none bg-transparent" />
        </div>
        <button className="hidden flex-row md:flex justify-center items-center text-gray-100 hover:bg-[#2C2C2C] py-2 px-4 rounded-sm">
          <Image src="/decal33-1.jpg" alt="Home" width={24} height={24} className="items-center text-center rounded-full mr-2" />
          <p>Connect Wallet</p>
        </button>
        <button className="text-gray-100 ml-2 p-2 hover:bg-[#2C2C2C] rounded-sm">
          <FiMenu className="text-2xl" />
        </button>
      </header>
      <div className="border-t border-t-gray-600"></div>
      <div className="relative mx-5 my-5 flex flex-col items-start gap-3 rounded-sm bg-apbanner-small bg-cover bg-center p-5 sm:gap-5">
        <p className="text-white font-bold text-2xl sm:text-4xl">The Deca App</p>
        <p className="text-gray-300 font-medium text-base sm:text-lg">Be the first to know</p>
        <div className="flex flex-row space-x-2">
          <button className="bg-white text-black font-semibold rounded-sm py-2 px-4 flex flex-row justify-center items-center text-sm">
            <p className="flex flex-row"><FaApple className="mr-1 text-xl" /> iOS Testflight</p>
          </button>
          <button className="bg-white text-black font-semibold rounded-sm py-2 px-4 flex flex-row justify-center items-center text-sm">
            <IoLogoAndroid className="mr-1 text-[26px]" />
            <p className="">Android App</p>
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col bg-cover bg-[#b9b5b2] bg-decal-background bg-[50%] h-[600px] lg:h-[687.5px] w-full lg:w-[50%] relative opacity-80">
          <div className="w-[90%] sm:w-[490px] h-80 sm:h-[362px] bg-[#171717] rounded-sm mx-auto my-auto flex flex-col items-center text-center text-white">
            <div className="flex flex-row justify-center items-center text-center text-xl mt-6 sm:mt-8 mb-6 sm:mb-8">
              <Image src="/deca.svg" alt="Deca" width={24} height={24} className="mr-2" />
              <p>Deca</p>
            </div>
            <p className="text-2xl sm:text-4xl font-bold">$BOME Token Airdrop</p>
            <p className="mt-6 text-base sm:text-lg">$BOME token distribution is now</p>
            <p className="text-base sm:text-lg">available for wallets that meet the</p>
            <p className="text-base sm:text-lg">requirements</p>
            <button className="bg-white hover:bg-slate-300 mt-8 w-[80%] sm:w-96 h-10 rounded-sm text-black">Check Eligibility</button>
            <p className="text-xs sm:text-sm mt-2">With email, socials or your favorite wallet.</p>
          </div>
          <div className="bg-gradient-to-r from-red-400 to-red-800 flex-row justify-center space-x-4 h-5 hidden lg:flex text-gray-200 text-[13px] font-medium">
            <div className="flex flex-row space-x-4 items-center">
              <Link href="https://twitter.com/0xDecaArt">
                <FaTwitter className="text-[17px]" />
              </Link>
              <Link href="https://discord.gg/3x6QHrjj5V">
                <FaDiscord className="text-[17px]" />
              </Link>
            </div>
            <div className="flex flex-row space-x-4 items-center">
              <Link href="https://deca.art/terms">Terms</Link>
              <Link href="https://deca.art/privacy">Privacy</Link>
              <p>&copy; 2024 Pattern Engine, Inc.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-[50%] h-[600px] lg:h-[687.5px] lg:overflow-y-auto relative text-white">
          <div className="flex flex-col w-[85%] md:w-[65%] mx-auto">
            <div className="flex flex-row">
              <p className="mt-10 font-bold text-base text-[120%]">What&apos;s happening</p>
            </div>
            <div className="flex flex-col mt-6">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                  <Image src="/unnamed.png" alt="Ghost" width={38} height={38} className="border border-[#2C2C2C] rounded-full" />
                  <div className="flex-col lg:flex-row ml-2">
                    <p className="text-white font-bold">X020</p>
                    <p className="text-gray-400">posted</p>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <p className="text-gray-400 text-sm">4h</p>
                  <RxDotsHorizontal className="ml-3 hidden md:flex" />
                </div>
              </div>
              <p className="text-lg mt-1">Absolutely amazing bit of work here.</p>
              <div className="flex flex-row font-bold text-lg">
                <p className="font-normal mr-1">Impressions of order #275 by</p>
                @nbswwit
              </div>
              <p className="text-lg">Well worth a follow.</p>
              <img src="/static_preview.png-1.jpeg" alt="Impressions of order" className="mt-4 rounded-sm h-96 lg:h-[680px]" />
              <div className="flex flex-row mt-2 justify-between">
                <div className="flex flex-row text-white">
                  <p className="font-bold">Impressions of Order #275</p>
                  <p className="text-gray-300 ml-1">by</p>
                  <p className="font-bold ml-1">nbswwit</p>
                </div>
                <div className="flex flex-row text-gray-500 space-x-2 text-sm">
                  <div className="flex flex-row items-center">
                    <FaRegHeart />
                    <p className="ml-1">105</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <FaRegComment />
                    <p className="ml-1">28</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <LuSun />
                    <p className="ml-1">0</p>
                  </div>
                </div>
              </div>
              <p className="mt-2">Liked by 105 People</p>
              <p className="mt-1 text-gray-400">Add a comment...</p>
            </div>
            <div className="flex flex-col mt-8">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                  <Image src="/static_preview-2.jpeg" alt="KunTa" width={38} height={38} className="border border-[#2C2C2C] rounded-full" />
                  <div className="flex-col lg:flex-row ml-2">
                    <p className="text-white font-bold">KunTa The BLeU Pepe</p>
                    <p className="text-gray-400">placed a 0.02 eth bid</p>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <p className="text-gray-400 text-sm">3h</p>
                  <RxDotsHorizontal className="ml-3 hidden md:flex" />
                </div>
              </div>
              <img src="/bb60K0j-EpmlcyUDFNpa.jpeg" alt="Pepuremberg Chronicles" className="mt-4 rounded-sm h-96 lg:h-[680px]" />
              <div className="flex flex-row mt-2 justify-between">
                <div className="flex flex-row text-white">
                  <p className="font-bold">Pepuremberg Chronicles</p>
                  <p className="text-gray-300 ml-1">by</p>
                  <p className="font-bold ml-1">Arsonic</p>
                </div>
                <div className="flex flex-row text-gray-500 space-x-2 text-sm">
                  <div className="flex flex-row items-center">
                    <FaRegHeart />
                    <p className="ml-1">66</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <FaRegComment />
                    <p className="ml-1">6</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <LuSun />
                    <p className="ml-1">3</p>
                  </div>
                </div>
              </div>
              <p className="mt-1 text-sm">Highest bid</p>
              <div className="flex flex-row mt-1 text-xl font-extrabold items-center">
                <RiMenu2Fill />
                <p className="ml-1 font-bold">0.02</p>
                <Image src="/static_preview.jpeg" alt="KunTa" width={22} height={22} className="border border-[#2C2C2C] rounded-full ml-4" />
                <p className="text-white font-bold ml-1">KunTa The BLeU Pepe</p>
              </div>
              <div className="bg-white py-1 w-24 text-black items-center text-center mt-1 text-sm">Place bid</div>
              <p className="mt-1">Liked by 66 People</p>
              <p className="mt-1 text-gray-400">View more</p>
              <p className="text-gray-400">Add a comment...</p>
            </div>
            <div className="bg-white rounded-sm text-black text-lg items-center text-center py-2 w-full mt-20 mb-4 lg:mb-16 mx-auto">Join Deca for more</div>
            <div className="flex-row justify-center space-x-4 h-5 flex lg:hidden text-gray-400 text-sm font-medium mb-4">
              <div className="flex flex-row space-x-4 items-center">
                <Link href="https://twitter.com/0xDecaArt">
                  <FaTwitter className="text-[17px]" />
                </Link>
                <Link href="https://discord.gg/3x6QHrjj5V">
                  <FaDiscord className="text-[17px]" />
                </Link>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <Link href="https://deca.art/terms">Terms</Link>
                <Link href="https://deca.art/privacy">Privacy</Link>
                <p>&copy; 2024 Pattern Engine, Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
