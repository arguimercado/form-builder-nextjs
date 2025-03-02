"use client";
import React, { useEffect, useState } from "react";
import RequestForm from "./(components)/RequestForm";
import DisplayType from "@/components/commons/DisplayType";
import { FormTableList } from "./(components)/FormTableList";
import FormGridList from "./(components)/FormGridList";
import { GetForms } from "@/actions/formbuilder";
import { toast } from "sonner";

const FormPage = () => {
   
	const [displayType, setDisplayType] = useState<"table" | "grid">("table");
   const [forms, setForms] = useState<FormModel[]>([]);
   const [loading,setLoading] = useState<boolean>(true);   
   
   const getForms = async () => {
      try {
         setLoading(true);
         const response = await GetForms();
         
         setForms(response);
      }
      catch(error: any) {
         toast(error, {
            description: "Failed to get forms",
            className: "bg-red-500",
         })
      }
      finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      getForms();
   },[]);

   if(forms.length === 0) {}
   
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
				{displayType === "table" && <FormTableList data={forms} loading={loading} />}
				{displayType === "grid" && <FormGridList />}
            
         </div>
      </div>
   );
};

export default FormPage;
