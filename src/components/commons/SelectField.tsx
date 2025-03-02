
import React from 'react'
import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form'
import { FormControl, FormItem, FormLabel } from '../ui/form'
import { Select, SelectItem, SelectValue } from '../ui/select'
import { SelectContent, SelectTrigger } from '@radix-ui/react-select'


interface IProps<T extends FieldValues> {
   label: string
   data: any[],
   field: ControllerRenderProps<T, Path<T>>
   type?: string
   placeholder?: string
   valueKey: string
   labelKey: string 
   
}

const SelectField = <T extends FieldValues> (
   {
      label,
      data,
      field,
      type,
      placeholder,
      valueKey,
      labelKey
   } : IProps<T>) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
         <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
         >
            <SelectTrigger className='w-full bg-white border border-gray-300 rounded-md shadow-sm'>
               <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className='bg-white border border-gray-300 rounded-md'>
               {data.map((item,index) => (
                  <SelectItem
                     key={index}
                     value={String(item[valueKey])}
                  >
                     {String(item[labelKey])}
                  </SelectItem>
               ))}
            </SelectContent>
         </Select>
      </FormControl>
    </FormItem>
  )
}


export default SelectField