
import React from "react";
import { FormControl, FormItem, FormLabel } from "../ui/form";
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

//get the field from the props

interface IProps<T extends FieldValues> {
   label: string
   field: ControllerRenderProps<T, Path<T>>
   type?: string
   placeholder?: string
   textarea?: boolean
}

const InputField = <T extends FieldValues> ({label,field,type,placeholder,textarea} : IProps<T>) => {
   return (
      <FormItem className="mt-4">
         <FormLabel>{label}</FormLabel>
         <FormControl>
            {textarea ? 
            (
               <Textarea 
                  placeholder={placeholder} 
                  {...field} />
            )
             : (
               <Input
                  type={type} 
                  placeholder={placeholder} 
                  {...field} />

             )}
         </FormControl>
      </FormItem>
   );
};

export default InputField;
