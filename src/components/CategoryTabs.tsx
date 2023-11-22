import { useEffect, useRef, useState } from 'react'
import { Button } from './Button'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'

type CategoryTabsProps = {
  categories: string[]
}
const TRANSLATE_AMOUNT = 200

function CategoryTabs({ categories }: CategoryTabsProps) {
  const [translate, setTranslate] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [isLeftVisable, setIsLeftvisable] = useState(true)
  const [isRightVisable, setIsRightvisable] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleSelect = (category: string) => {
    setSelectedCategory(category)
    // You can perform additional actions here if needed
  }

  useEffect(() => {
    if (containerRef.current === null) return
    const observer = new ResizeObserver(entries => {
      const container = entries[0]?.target
      if (container == null) return

      setIsLeftvisable(translate > 0)
      setIsRightvisable(
        translate + container.clientWidth < container.scrollWidth
      )
    })
    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
    }
  }, [categories, translate])

  return (
    <>
      <div ref={containerRef} className='overflow-x-hidden relative'>
        <div
          className='flex whitespace-nowrap gap-3 transition-transform w-[max-content] pt-0.5'
          style={{ transform: `translateX(-${translate}px)` }}
        >
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
              onClick={() =>
                setTranslate(translate => {
                  const newTranslate = translate - TRANSLATE_AMOUNT
                  if (newTranslate <= 0) return 0
                  return newTranslate
                })
              }
            >
              <FaChevronLeft />
            </Button>
          </div>
        )}

        {isRightVisable && (
          <div className='absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end'>
            <Button
              onClick={() =>
                setTranslate(translate => {
                  if (containerRef.current === null) {
                    return translate
                  }
                  const newTranslate = translate + TRANSLATE_AMOUNT
                  const edge = containerRef.current.scrollWidth
                  const width = containerRef.current.clientWidth
                  if (newTranslate + width >= edge) {
                    return edge - width
                  }
                  return newTranslate
                })
              }
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
