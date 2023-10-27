import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const buttonStyles = cva(['transition-colors'], {
  variants: {
    variant: {
      default: ['bg-secondary', 'hover:bg-secondary-hover'],
      ghost: ['hover:bg-gray-100'],
    },
    defaultVariants: {
      variant: 'default',
      siz: 'default',
    },
    size: {
      default: ['rounded', 'p-2'],
      icon: [
        'rounded-full',
        'w-10',
        'h-10',
        'flex',
        'items-center',
        'justify-center',
        'p-2.5',
      ],
    },
  },
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<'button'>

export function Button({ variant, size, ...props }: ButtonProps) {
  return (
    <>
      <button {...props} className={buttonStyles({ variant, size })}>
        <AiOutlineMenu size={30} color='#fff' />
      </button>
    </>
  )
}
