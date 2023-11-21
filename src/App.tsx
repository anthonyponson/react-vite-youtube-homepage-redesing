import './App.css'
import CategoryTabs from './components/CategoryTabs'
import { categories } from './data/home'
import Navbar from './layouts/Navbar'
import { useState } from 'react'

function App() {
  // const [slectedCategory, setSlectedCategory] = useState(categories[0])

  return (
    <>
      <div className='px-2 py-3'>
        <Navbar />
        <div className='grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto'>
          <div>sidebar</div>
          <div className='overflow-x-hidden px-8 pb-4'>
            <div className='sticky top-0 bg-white z-10 pb-4'></div>
            <CategoryTabs categories={categories} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
