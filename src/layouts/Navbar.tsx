import { AiOutlineSearch } from 'react-icons/ai'
import { FaMicrophone } from 'react-icons/fa'
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { AiOutlineUser } from 'react-icons/ai'

import logo from '../assets/tube.png'
import ham from '../assets/hamburger.png'

function Navbar() {
  return (
    <div className='flex gap-10 lg:gap-20 justify-between items-center'>
      <div className='flex gap-4 items-center'>
        <button>
          <img src={ham} width={20} height={20} alt='' />
        </button>
        <img src={logo} width={50} height={50} alt='' />
      </div>

      <div className='flex w-1/2'>
        <input className='w-full border-gray-400 rounded-l-full' type='' />
        <div className='bg-gray-800 px-4 py-1 rounded-r-full'>
          <AiOutlineSearch size={30} color='#fff' />
        </div>
        <div className='bg-gray-800 px-2 py-2 rounded-full ml-3'>
          <FaMicrophone size={25} color='#fff' />
        </div>
      </div>

      <div className='flex flex-row gap-5'>
        <div>
          <AiOutlineVideoCameraAdd size={30} color='#fff' />
        </div>
        <div>
          <IoIosNotificationsOutline size={30} color='#fff' />
        </div>
        <div>
          <AiOutlineUser size={30} color='#fff' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
