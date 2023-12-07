import { AiFillHome, AiOutlineHome } from 'react-icons/ai'
import { Button, buttonStyles } from './Button'
import { twMerge } from 'tailwind-merge'
import shorts from '../assets/shorts.svg'
import { MdOutlineSubscriptions } from 'react-icons/md'
import { VscLibrary } from 'react-icons/vsc'
import { Children, ElementType, ReactNode, useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

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

      <aside className='absolute w-56 lg:sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col gap-2 px-2'>
        <LargeSidebar visibleCount={1}>
          <LargeSidebarItem isActive Icon={AiFillHome} title='Home' url='/' />
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

type LargeSidebarProps = {
  children: ReactNode
  title?: string
  visibleCount?: number
}

function LargeSidebar({
  children,
  title,
  visibleCount = Number.POSITIVE_INFINITY,
}: LargeSidebarProps) {
  const [isExpand, setIsExpand] = useState(false)
  const childrenArray = Children.toArray(children).flat()
  const showExpandButton = childrenArray.length > visibleCount

  const visibleChildren = isExpand
    ? childrenArray
    : childrenArray.slice(0, visibleCount)

  const ButtonIcon = isExpand ? ChevronUp : ChevronDown
  return (
    <>
      <div>
        {title && <div className='ml-4 mt-2 text-lg mb-1'>{title}</div>}

        {visibleChildren}

        {showExpandButton && (
          <Button
            className='w-full flex items-center rounded-lg gap-4 p-3'
            variant={'ghost'}
          >
            <ButtonIcon
              onClick={() => setIsExpand(e => !e)}
              className='w-6 h-6'
            />
            <div>{isExpand ? 'show less' : 'show more'}</div>
          </Button>
        )}
      </div>
    </>
  )
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
