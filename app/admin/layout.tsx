import React from 'react'
import Sidebar from './Sidebar'
import { Separator } from '@/components/ui/separator'

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className='text-2xl p-4 '>Dashboard</h1>
      <Separator className='mt-2' />
      <section>
        <div className='grid lg:grid-cols-12 gap-12 mt-12'>
          <div className='lg:col-span-2'>
            <Sidebar />
          </div>
          <div className='lg:col-span-10 px-4'>{children}</div>
        </div>
      </section>
    </>
  )
}

export default DashboardLayout
