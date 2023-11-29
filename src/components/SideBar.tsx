import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { siYoutubeshorts } from 'simple-icons'
import { buttonStyles } from './Button'
import { twMerge } from 'tailwind-merge'
import shorts from '../assets/shorts.svg'

function SideBar() {
  return (
    <aside className='sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden'>
      <a
        href='/'
        className={twMerge(
          buttonStyles({ variant: 'ghost' }),
          'py-2 px-1 flex flex-col rounded-lg items-center gap-1'
        )}
      >
        <AiFillHome className='' />
        <div className='text-sm'>Home</div>
      </a>
      <a
        href='/'
        className={twMerge(
          buttonStyles({ variant: 'ghost' }),
          'py-2 px-1 flex flex-col rounded-lg items-center gap-1'
        )}
      >
        <img src={shorts} width={18} height={18} alt='' />
        <div className='text-sm'>shorts</div>
      </a>
      {/* Add more links as needed */}
    </aside>
  )
}
  
export default SideBar
