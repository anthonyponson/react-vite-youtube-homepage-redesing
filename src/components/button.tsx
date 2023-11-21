import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const buttonStyles = cva(['transition-colors'], {
  variants: {
    variant: {
      default: ['bg-secondary', 'hover:bg-secondary-hover', 'rounded', 'px-2'],
      ghost: ['hover:bg-neutral-200'],
      dark: [
        'bg-secondary-dark',
        'hover:bg-secondary-dark-hover',
        'text-secondary',
        'rounded',
        'px-4',
      ],
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
    size: {
      default: ['rounded', 'p-2'],
      icon: [
        'text-lg',
        'rounded-full',
        'w-11',
        'h-11',
        'flex',
        'items-center',
        'justify-center',
        'p-2.5',
      ],
    },
  },
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<'button'>

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <>
      <button
        {...props}
        className={twMerge(buttonStyles({ variant, size }), className)}
      ></button>
    </>
  )
}
