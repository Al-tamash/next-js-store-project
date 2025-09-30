import { Button } from '../ui/button'
import Link from 'next/link'
import { LuShoppingCart } from 'react-icons/lu'
async function CartButton() {
  // temp
  const numItemsInCart = 9
  return (
    <Button
      size='icon'
      variant={'outline'}
      asChild
      className='flex items-center justify-center relative'
    >
      <Link href='/cart'>
        <LuShoppingCart className='w-6 h-6' />
        <span className='absolute -top-3 -right-3 flex items-center justify-center w-6 h-6 text-xs text-white bg-primary rounded-full'>
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  )
}

export default CartButton
