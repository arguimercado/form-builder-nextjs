"use client";
import React, { useState } from "react";
import RequestForm from "./(components)/RequestForm";
import DisplayType from "@/components/commons/DisplayType";
import { FormTableList } from "./(components)/FormTableList";
import FormGridList from "./(components)/FormGridList";

const FormPage = () => {

	const [displayType, setDisplayType] = useState<"table" | "grid">("table");
   
	return (
      <div className="flex flex-col w-full">
         <div className="flex flex-row justify-between items-center w-full border-b border-neutral-500 dark:border-neutral-300 p-4">
            <RequestForm />
            <DisplayType
               selectedValue={displayType}
               onChange={(value) => setDisplayType(value)}
            />
         </div>
         <div>
				{displayType === "table" && <FormTableList />}
				{displayType === "grid" && <FormGridList />}
            
         </div>
      </div>
   );
};

export default FormPage;
