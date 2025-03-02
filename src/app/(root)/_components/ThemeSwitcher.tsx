"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React, { useEffect } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
   const {theme,setTheme } = useTheme();
   const [mounted, setMounted] = React.useState(false);

   useEffect(() => {
      setMounted(true);
   },[]);


   if(mounted === false) return null;


   return (
      <Tabs>
         <TabsList className="border" defaultValue={theme}>
            <TabsTrigger 
               value="light"
               onClick={() => setTheme("light")}
            >
               <SunIcon className="size-[1.2rem]" />
            </TabsTrigger>
            <TabsTrigger 
               value="dark"
               onClick={() => setTheme("dark")}   
            >
               <MoonIcon className="size-[1.2rem]" />
            </TabsTrigger>
         </TabsList>
      </Tabs>
   );
};

export default ThemeSwitcher;
