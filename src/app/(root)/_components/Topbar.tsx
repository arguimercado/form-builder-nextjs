import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

const Topbar = () => {
  return (
    <div className='w-full border-b border-neutral-300 dark:border-neutral-100 h-[60px] pl-[70px] flex '>
      <div className='flex items-center justify-between w-full px-4'>
         <h2 className='text-slate-500 dark:text-white'>Form Builder</h2>
         <ThemeSwitcher />
      </div>
    </div>
  )
}

export default Topbar