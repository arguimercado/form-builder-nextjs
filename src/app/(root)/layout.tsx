import React, { ReactNode } from "react";
import Sidebar from "./_components/Sidebar";
import Topbar from "./_components/Topbar";

const AppLayout = ({ children }: { children: ReactNode }) => {

   return (
      <div className="w-screen min-h-screen flex flex-col bg-slate-50  dark:bg-neutral-800 dark:text-black">
         <Topbar />
         <Sidebar />
         <main className="pl-[70px]">
            <div className="px-4 py-4 ">
               {children}
            </div>

         </main>
      </div>
   );
};

export default AppLayout;
