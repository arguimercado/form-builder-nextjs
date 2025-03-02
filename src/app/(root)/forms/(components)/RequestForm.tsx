import { Button } from "@/components/ui/button";
import React from "react";
import { CiCirclePlus } from "react-icons/ci";

const RequestForm = () => {
   return (
      <Button className="flex flex-row items-center">
         <CiCirclePlus />
         <span className="ml-2">Request Form</span>
      </Button>
   );
};

export default RequestForm;
