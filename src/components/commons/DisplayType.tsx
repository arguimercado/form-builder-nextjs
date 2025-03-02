"use client";
import React from 'react'
import { Tabs, TabsList,TabsTrigger } from '../ui/tabs'
import { FiGrid } from 'react-icons/fi';
import { LiaTableSolid } from 'react-icons/lia';

interface IProps {
   selectedValue: "grid" | "table"
   onChange?: (value: "grid" | "table") => void
}

const DisplayType = ({selectedValue,onChange} : IProps) => {
  return (
      <Tabs defaultValue={selectedValue}>
         <TabsList>
            <TabsTrigger 
               value="grid"
               onClick={() => onChange && onChange('grid')}
            >
            <FiGrid className='size-4'/>
            </TabsTrigger >
            <TabsTrigger value="table" onClick={() => onChange && onChange('table')}>
            <LiaTableSolid className='size-4' />
            </TabsTrigger>
         </TabsList>
      </Tabs>
  )
}

export default DisplayType