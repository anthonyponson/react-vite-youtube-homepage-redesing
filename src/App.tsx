import './App.css'
import CategoryTabs from './components/CategoryTabs'
import VideoGrid from './components/VideoGrid'
import { categories } from './data/home'
import Navbar from './layouts/Navbar'
import { videos } from './data/home'
import { useState } from 'react'
import SideBar from './components/SideBar'
import { SidebarProvider } from './Context/SidebarProvider'

function App() {
  // const [slectedCategory, setSlectedCategory] = useState(categories[0])

  const [video, setVideos] = useState(videos)
  return (
    <SidebarProvider>
      <>
        <div className='max-h-screen flex flex-col'>
          <Navbar />
          <div className='grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto'>
            <SideBar />
            <div className='overflow-x-hidden px-8'>
              <div className='sticky top-0 bg-white z-10 pb-4'>
                <CategoryTabs categories={categories} />
              </div>

              <div className='grid gap grid-cols-[repeat(auto-fill,minmax(290px,1fr))]'>
                {video.map(vid => (
                  <div className='p-2'>
                    <VideoGrid key={vid.id} {...vid} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    </SidebarProvider>
  )
}

export default App
