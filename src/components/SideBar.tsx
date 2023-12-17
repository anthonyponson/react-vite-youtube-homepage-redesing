import {
  AiFillHome,
  AiOutlineClockCircle,
  AiOutlineHistory,
  AiOutlineHome,
  AiOutlineUser,
} from 'react-icons/ai'
import { Button, buttonStyles } from './Button'
import { twMerge } from 'tailwind-merge'
import shorts from '../assets/shorts.svg'
import { MdOutlineSubscriptions, MdSubscriptions } from 'react-icons/md'
import { VscLibrary } from 'react-icons/vsc'
import { Children, ElementType, ReactNode, useState } from 'react'
import {
  ChevronUp,
  ChevronDown,
  Clapperboard,
  ListVideo,
  Lightbulb,
  Flame,
  ShoppingBag,
  Music2,
  Film,
  Radio,
  Gamepad2,
  Newspaper,
  Trophy,
  Shirt,
  Podcast,
} from 'lucide-react'
import { RiHistoryFill, RiVideoLine } from 'react-icons/ri'
import { playList, subcription } from '../data/sideBar'
import { useSidebarContext } from '../Context/SidebarProvider'
import { NavbarFirstSection } from '../layouts/Navbar'

function SideBar() {
  const { isLargeOpen, isSmallOpen } = useSidebarContext()

  return (
    <>
      <aside
        className={`sticky hidden md:block top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 ${
          isLargeOpen ? 'lg:hidden' : 'lg:flex'
        }`}
      >
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

      <aside
        className={`absolute w-56 lg:sticky top-0 overflow-y-auto scrollbar-hidden pb-4 lg:flex flex-col gap-2 px-2 ${
          isLargeOpen ? 'lg:flex' : 'lg:hidden'
        } ${isSmallOpen ? 'flex z-[999] bg-white max-h-screen' : 'hidden'}`}
      >
        <NavbarFirstSection />
        <LargeSidebar>
          <LargeSidebarItem isActive Icon={AiFillHome} title='Home' url='/' />
          <LargeSidebarItem Icon={Clapperboard} title='Shorts' url='/Shorts' />
          <LargeSidebarItem
            Icon={MdSubscriptions}
            title='subcriptions'
            url='/subcriptions'
          />
        </LargeSidebar>
        <hr />
        <LargeSidebar visibleCount={6}>
          <LargeSidebarItem
            Icon={AiOutlineUser}
            title='your channel'
            url='/your channel'
          />
          <LargeSidebarItem
            Icon={RiHistoryFill}
            title='History'
            url='/your channel'
          />
          <LargeSidebarItem
            Icon={VscLibrary}
            title='Library'
            url='/your channel'
          />
          <LargeSidebarItem
            Icon={RiVideoLine}
            title='your video'
            url='/your channel'
          />
          <LargeSidebarItem
            Icon={AiOutlineClockCircle}
            title='watch later'
            url='/your channel'
          />
          {playList.map(playlist => (
            <LargeSidebarItem
              key={playlist.id}
              Icon={ListVideo}
              title={`${playlist.name}`}
              url='/'
            />
          ))}
        </LargeSidebar>

        <hr />
        <LargeSidebar>
          <h2 className='font-semibold text-lg ml-4'>Subscriptions</h2>
          {subcription.map(sub => (
            <LargeSidebarItem
              url={`/@${sub.id}`}
              Icon={sub.imageUrl}
              key={sub.id}
              title={sub.channelName}
            />
          ))}
        </LargeSidebar>

        <hr />

        <LargeSidebar title='Explore'>
          <LargeSidebarItem Icon={Flame} title='Trending' url='/trending' />
          <LargeSidebarItem
            Icon={ShoppingBag}
            title='Shopping'
            url='/shopping'
          />
          <LargeSidebarItem Icon={Music2} title='Music' url='/music' />
          <LargeSidebarItem Icon={Film} title='Movies & TV' url='/movies-tv' />
          <LargeSidebarItem Icon={Radio} title='Live' url='/live' />
          <LargeSidebarItem Icon={Gamepad2} title='Gaming' url='/gaming' />
          <LargeSidebarItem Icon={Newspaper} title='News' url='/news' />
          <LargeSidebarItem Icon={Trophy} title='Sports' url='/sports' />
          <LargeSidebarItem Icon={Lightbulb} title='Learning' url='/learning' />
          <LargeSidebarItem
            Icon={Shirt}
            title='Fashion & Beauty'
            url='/fashion-beauty'
          />
          <LargeSidebarItem Icon={Podcast} title='Podcasts' url='/podcasts' />
        </LargeSidebar>
      </aside>
    </>
  )
}
type LargeSidebarItemProps = {
  Icon: ElementType | string
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
        {typeof Icon === 'string' ? (
          <img src={Icon} className='w-8 h-8 rounded-full' alt='' />
        ) : (
          <Icon className='w-6 h-6' />
        )}

        <div className='whitespace-nowrap overflow-hidden text-ellipsis'>
          {title}
        </div>
      </a>
    </>
  )
}

export default SideBar
