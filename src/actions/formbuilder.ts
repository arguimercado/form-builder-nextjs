"use server";
import prisma from '@/lib/prisma-client'
import { FormSchema, FormSchemaType } from '@/schema/form-schema';
import { randomUUID } from 'crypto';

export async function GetFormStat() {

   const stats = await prisma.form.aggregate({
      _sum: {
         visits: true,
         submissions: true,
      }
   });

   const visits = stats._sum.visits || 0;
   const submissions = stats._sum.submissions || 0;

   let submissionRate = 0;
   if(visits > 0) {
      submissionRate = (submissions / visits) * 100;
   }

   const bounceRate = 100 - submissionRate;

   return {
      visits,
      submissions,
      submissionRate,
      bounceRate
   }
}

export async function GetForms() {
   const forms = await prisma.form.findMany({
      orderBy: {
         createdAt: 'desc'
      }
   });

   return forms;
}

export async function SaveForm({description,name,type} : FormSchemaType) {
   
   //validate the form first 
   const isFormValid = FormSchema.safeParse({description,name,type});

   if(!isFormValid.success) {
      throw new Error("Invalid form data");
   }
   
   const form = await prisma.form.create({
      data: {
         name,
         description,
         type: "form",
         isActive: true,
         published: false,
         author: "Admin",
         content: "",
         visits: 0,
         submissions: 0,
         createdAt: new Date(),
         userId: randomUUID()
      }
   });

   return form;
}