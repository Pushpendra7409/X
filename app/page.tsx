// import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdForwardToInbox } from "react-icons/md";
import { LuSquareSlash } from "react-icons/lu";
import { IoBookmarkSharp } from "react-icons/io5";
import { PiBriefcaseLight } from "react-icons/pi";
import { PiUsersThreeLight } from "react-icons/pi";
import { GiPowerLightning } from "react-icons/gi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import Feedcard from "@/components/FeedCard";

interface XSidebarButton {
   title: string,
   icon: React.ReactNode,  
}

const SidebarMenuItems: XSidebarButton[] = [
  {
    title:"Home",
    icon: <GoHome />
  },
  {
    title:"Explore",
    icon: <IoSearch />
  },
  {
    title:"Notifications",
    icon: <IoMdNotificationsOutline />
  },
  {
    title:"Messages",
    icon: <MdForwardToInbox />
  },
  {
    title:"Grok",
    icon: <LuSquareSlash />
  },
  {
    title:"Bookmarks",
    icon: <IoBookmarkSharp />
  },
  {
    title:"Jobs",
    icon: <PiBriefcaseLight />
  },
  {
    title:"Communities",
    icon: <PiUsersThreeLight />
  },
  {
    title:"Premium",
    icon: <BsTwitterX />
  },
  {
    title:"Verified Orgs",
    icon: <GiPowerLightning />
  },
  {
    title:"Profile",
    icon: <MdOutlinePersonOutline />
  },
  {
    title:"More",
    icon: <TbDotsCircleHorizontal />
  },
   
]

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 ml-10">
          <div className="text-[1.6rem] h-fit w-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
            <BsTwitterX />
          </div>    
          <div className="mt-3 text-[1.3rem] font-medium">
          <ul>
          {SidebarMenuItems.map((item) => (
            <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-2 w-fit cursor-pointer mb-3"
            key={item.title}>
            <span className="text-[1.8rem]">{item.icon}</span>
            <span>{item.title}</span>
            </li>
          ))}
          </ul>
          <div className="mt-5 text-xl w-full">
            <button className="bg-sky-500 w-[14rem] flex justify-center items-center gap-4 hover:bg-sky-600 rounded-full px-4 py-3 cursor-pointer mb-3">Post</button>
          </div>
          </div>
          </div>

        <div className="col-span-6 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600">
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
