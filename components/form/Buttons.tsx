'use client'

import { ReloadIcon } from '@radix-ui/react-icons'
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SignInButton } from '@clerk/nextjs'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { LuPencil, LuTrash2 } from 'react-icons/lu'

type btnSize = 'default' | 'lg' | 'sm'

type SubmitButtonProps = {
  className?: string
  text?: string
  size?: btnSize
}
export function SubmitButton({
  className = '',
  text = 'Submit',
  size = 'lg',
}: SubmitButtonProps) {
  const { pending } = useFormStatus()
  return (
    <Button
      size={size}
      type='submit'
      className={cn(className)}
      disabled={pending}
    >
      {pending ? (
        <>
          <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  )
}

type actionType = 'edit' | 'delete'
export function IconButton({ actionType }: { actionType: actionType }) {
  const { pending } = useFormStatus()
  const renderdIcon = () => {
    switch (actionType) {
      case 'edit':
        return <LuPencil />
      case 'delete':
        return <LuTrash2 />
      default:
        const never: never = actionType
        throw new Error(`Invalid action type: ${never}`)
    }
  }
  return (
    <Button
      type='submit'
      size={'icon'}
      variant={'link'}
      className='p-2 cursor-pointer'
    >
      {pending ? <ReloadIcon className='animate-spin' /> : renderdIcon()}
    </Button>
  )
}

export const CardSignInButton = () => {
  return (
    <SignInButton mode='modal'>
      <Button
        asChild
        variant={'outline'}
        type='button'
        size={'icon'}
        className='p-2 cursor-pointer'
      >
        <FaRegHeart />
      </Button>
    </SignInButton>
  )
}
export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus()
  return (
    <Button
      type='submit'
      size='icon'
      variant='outline'
      className='p-2 cursor-pointer'
    >
      {pending ? (
        <ReloadIcon className='animate-spin' />
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  )
}
