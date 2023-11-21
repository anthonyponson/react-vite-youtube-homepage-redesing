import { useState } from 'react'
import { Button } from './Button'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'

type CategoryTabsProps = {
  categories: string[]
}

function CategoryTabs({ categories }: CategoryTabsProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [isLeftVisable, setIsLeftvisable] = useState(true)
  const [isRightVisable, setIsRightvisable] = useState(true)

  const handleSelect = (category: string) => {
    setSelectedCategory(category)
    // You can perform additional actions here if needed
  }

  return (
    <>
      <div className='overflow-x-hidden relative'>
        <div className='flex whitespace-nowrap gap-3 transition-transform w-[max-content] pt-0.5'>
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => handleSelect(category)}
              variant={selectedCategory === category ? 'dark' : 'default'}
            >
              {category}
            </Button>
          ))}
        </div>

        {isLeftVisable && (
          <div className='absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full'>
            <Button
              variant={'ghost'}
              size={'icon'}
              className='aspect-square h-full w-auto p-1.5'
            >
              <FaChevronLeft />
            </Button>
          </div>
        )}

        {isRightVisable && (
          <div className='absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end'>
            <Button
              variant={'ghost'}
              size={'icon'}
              className='aspect-square h-full w-auto p-1.5'
            >
              <FaChevronRight />
            </Button>
          </div>
        )}
      </div>
    </>
  )
}

export default CategoryTabs
