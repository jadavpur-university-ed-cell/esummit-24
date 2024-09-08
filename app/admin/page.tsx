import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <>
    <section className='h-screen flex flex-col p-10'>
      <div className='w-full flex justify-center'>
    <h1 className='text-white text-4xl'>Admin Page</h1>
      </div>
      <div className='flex w-full justify-around pt-10'>
        <Link href="/admin/teams" className='bg-white px-2 py-1 rounded-[3px]'>Teams</Link>
        <Link href="/admin/users" className='bg-white px-2 py-1 rounded-[3px]'>Users</Link>
      </div>
    </section>
    </>
  )
}

export default page