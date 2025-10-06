import { cn } from '@/lib/utils'

function EmptyList({
  heading = 'No Products',
  className,
}: {
  heading?: string
  className?: string
}) {
  return (
    <div>
      <h2 className={cn('text-xl', className)}>{heading}</h2>
    </div>
  )
}

export default EmptyList
