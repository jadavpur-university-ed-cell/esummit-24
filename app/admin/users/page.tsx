import React from 'react'
import Link from 'next/link'

async function page() {
  return (
    <>
    <section className='flex flex-col items-center p-16 gap-y-6'>
        <h1 className='text-3xl text-white font-medium'>Users</h1>
        <div className='w-1/2 flex justify-between'>
          <Link href="/admin/users/verified" className='bg-white px-2 py-1 rounded-sm'>Verified Users</Link>
          <Link href="/admin/users/unverified" className='bg-white px-2 py-1 rounded-sm'>Unverified Users</Link>
        </div>
    </section>
    </>
  )
}

export default page