"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { TiDocumentText } from "react-icons/ti";
import { RiHomeSmile2Line } from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";
import { HomeIcon, LucideIcon, NewspaperIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const menuData = [
   {
      icon: HomeIcon,
      title: "Home",
      route: "/",
   },
   {
      icon: NewspaperIcon,
      title: "Forms",
      route: "/forms",
   },
]

const NavButton = ({icon: Icon,title,route,active} : {icon: LucideIcon, title?: string, route: string,active:boolean} ) => {
   return (
      <Link href={route} className={cn("group px-4 py-2 rounded-md ", active ? "bg-amber-200 dark:bg-amber-700 text-white" : "dark:text-black")} >
         <Icon className="size-5 group-hover:text-slate-300" />
      </Link>
   )
}

const Sidebar = () => {
   
   //create a selected icon on navigation do it when param is equal to the current route
   //if route == '/' then the 
   const currentPath = usePathname();


   const route = useRouter();
   return (
      <div className="bg-neutral-200 dark:bg-white h-screen fixed w-[70px]">
         <div className="logo my-5 h-[48px]"></div>
         <div className=" flex flex-col items-center gap-3">
            {menuData.map((item,index) => {
                const isActive =
                (currentPath.includes(item.route) && item.route.length > 1) ||
                currentPath === item.route;
                
                return <NavButton key={index} icon={item.icon} title={item.title} route={item.route} active={isActive} />

            })}
           
         </div>
      </div>
   );
};

export default Sidebar;
