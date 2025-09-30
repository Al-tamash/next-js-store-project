import Link from 'next/link'
import { Button } from '../ui/button'
import HeroCarousel from './HeroCarousel'

function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl sm:text-6xl tracking-tight'>
          We are changing the way people shop
        </h1>
        <p className='max-w-xl mt-8 text-lg text-muted-foreground leading-8'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          repudiandae, accusantium blanditiis amet optio pariatur incidunt
          commodi quo sapiente rerum.
        </p>
        <Button asChild size={'lg'} className='mt-8'>
          <Link href={'/products'}>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  )
}

export default Hero
