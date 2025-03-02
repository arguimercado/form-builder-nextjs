"use client";
import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogDescription,
   DialogTrigger,
   DialogFooter,
} from "@/components/ui/dialog";
import { Form, FormField } from "@/components/ui/form";
import { FormSchema, FormSchemaType } from "@/schema/form-schema";

import React from "react";
import { useForm } from "react-hook-form";
import { CiCirclePlus } from "react-icons/ci";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/commons/InputField";
import { SaveForm } from "@/actions/formbuilder";
import { toast } from "sonner";

const RequestForm = () => {
   const form = useForm<FormSchemaType>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         name: "",
         description: "",
         type: "form",
      },
   });

   const handleSubmit = async (data: FormSchemaType) => {
      try {
         const response = await SaveForm(data);
         toast("Form saved successfully");
      } catch (error: any) {
         toast(error, {
            description: "Failed to save form",
            className: "bg-red-500",
         });
      }
   };

   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button className="flex flex-row items-center">
               <CiCirclePlus />
               <span className="ml-2">Request Form</span>
            </Button>
         </DialogTrigger>
         <DialogContent>
            <DialogHeader>New Form</DialogHeader>
            <DialogDescription>Create New Form</DialogDescription>
            <div className="w-full mt-4">
               <Form {...form}>
                  <form>
                     <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                           <InputField
                              label="Form Name"
                              placeholder="Enter Form Name"
                              field={field}
                           />
                        )}
                     />
                     <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                           <InputField
                              label="Description"
                              placeholder="Enter Description"
                              field={field}
                              textarea
                           />
                        )}
                     />
                  </form>
               </Form>
            </div>
            <DialogFooter>
               <Button
                  disabled={form.formState.isSubmitting}
                  onClick={form.handleSubmit(handleSubmit)}
                  className="w-full"
               >
                  {form.formState.isSubmitting ? "Saving..." : "Save"}
               </Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default RequestForm;
