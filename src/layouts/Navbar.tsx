import {
  AiOutlineArrowLeft,
  AiOutlineMenu,
  AiOutlineSearch,
} from 'react-icons/ai'
import { FaMicrophone } from 'react-icons/fa'
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { AiOutlineUser } from 'react-icons/ai'

import logo from '../assets/tube.png'
import { Button } from '../components/Button'
import { useState } from 'react'

function Navbar() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

  return (
    <div className='flex gap-10 justify-between items-center py-4 lg:gap-20'>
      <div
        className={`items-center gap-2 ${
          showFullWidthSearch ? 'hidden' : 'flex'
        }`}
      >
        <Button variant={'ghost'} size={'icon'}>
          <AiOutlineMenu size={25} />
        </Button>
        <img src={logo} width={50} height={50} alt='' />
      </div>

      <form
        className={`gap-4 flex-grow justify-center items-center ${
          showFullWidthSearch ? 'flex' : 'hidden md:flex'
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            variant={'default'}
            size={'icon'}
            className='flex-shrink-0'
          >
            <AiOutlineArrowLeft size={18} />
          </Button>
        )}

        <div className='flex flex-grow max-w-[600px]'>
          <input
            placeholder='search'
            className='w-full border border-gray-400 rounded-l-full shadow-inner shadow-gray-200 focus:border-blue-500 outline-none px-4 py-2 '
            type='search'
          />

          <Button
            className='px-2 rounded-r-full border border-l-0 border-gray-400'
            variant={'default'}
          >
            <AiOutlineSearch size={20} />
          </Button>
        </div>

        <Button variant={'default'} size={'icon'} className='flex-shrink-0'>
          <FaMicrophone size={18} />
        </Button>
      </form>

      <div
        className={`flex-shrink-0 ${showFullWidthSearch ? 'hidden' : 'flex'}`}
      >
        <Button
          className='md:hidden'
          variant={'ghost'}
          size={'icon'}
          onClick={() => setShowFullWidthSearch(true)}
        >
          <AiOutlineSearch size={20} />
        </Button>

        <Button className='md:hidden' variant={'ghost'} size={'icon'}>
          <FaMicrophone size={20} />
        </Button>

        <Button variant={'ghost'} size={'icon'}>
          <AiOutlineVideoCameraAdd size={20} />
        </Button>

        <Button variant={'ghost'} size={'icon'}>
          <IoIosNotificationsOutline size={25} />
        </Button>

        <Button>
          <AiOutlineUser size={22} />
        </Button>
      </div>
    </div>
  )
}

export default Navbar
