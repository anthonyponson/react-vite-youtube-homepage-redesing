import { AiFillHome, AiOutlineHome } from 'react-icons/ai'
import { buttonStyles } from './Button'
import { twMerge } from 'tailwind-merge'
import shorts from '../assets/shorts.svg'
import { MdOutlineSubscriptions } from 'react-icons/md'
import { VscLibrary } from 'react-icons/vsc'
import { ElementType } from 'react'

function SideBar() {
  return (
    <>
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

        <a
          href='/'
          className={twMerge(
            buttonStyles({ variant: 'ghost' }),
            'py-2 px-1 flex flex-col rounded-lg items-center gap-1'
          )}
        >
          <MdOutlineSubscriptions width={18} height={18} alt='' />
          <div className='text-sm'>subcription</div>
        </a>

        <a
          href='/'
          className={twMerge(
            buttonStyles({ variant: 'ghost' }),
            'py-2 px-1 flex flex-col rounded-lg items-center gap-1'
          )}
        >
          <VscLibrary width={18} height={18} alt='' />
          <div className='text-sm'>Lirary</div>
        </a>

        {/* Add more links as needed */}
      </aside>

      <aside className='absolute w-56 lg:sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col gap-2 px-2 pt-4 '>
        <LargeSidebar>
          <LargeSidebarItem isActive Icon={AiFillHome} title='Home' url='/' />
        </LargeSidebar>
      </aside>
    </>
  )
}
type LargeSidebarItemProps = {
  Icon: ElementType
  title: string
  url: string
  isActive?: boolean
}

function LargeSidebar({ children }: any) {
  return children
}

function LargeSidebarItem({
  Icon,
  title,
  url,
  isActive,
}: LargeSidebarItemProps) {
  return (
    <>
      <a
        href={url}
        className={twMerge(
          buttonStyles({ variant: 'ghost' }),
          `w-full flex items-center rounded-lg gap-3 p-3 ${
            isActive ? 'font-bold bg-neutral-100 hover:bg-secondary' : undefined
          }`
        )}
      >
        <Icon className='w-6 h-6' />
        <div className='whitespace-nowrap overflow-hidden text-ellipsis'>
          {title}
        </div>
      </a>
    </>
  )
}

export default SideBar
