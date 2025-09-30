import React from 'react'
import { FaStar } from 'react-icons/fa'

function ProductRating({ productId }: { productId: string }) {
  const rating = 4.2
  const count = 25
  const className = `flex gap-1 mt-1 mb-4 items-center text-base`
  const countValue = `${count} reviews`

  return (
    <span className={className}>
      <FaStar className='w-3 h-3' />
      {rating} {countValue}
    </span>
  )
}

export default ProductRating
