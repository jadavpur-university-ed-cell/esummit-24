import React, {useState} from 'react'
import { getUsers } from '../[eventName]/queries'
import Form from './Form';

async function handleEmailSubmission(){
  const users= await getUsers();
}

export default function page() {
  return (
    <>
    <main className='flex flex-col items-center p-[10vmin]'>
      <h1 className='text-4xl text-white font-medium'>Create New Team</h1>
      <Form />
    </main>
    </>
  )
}
