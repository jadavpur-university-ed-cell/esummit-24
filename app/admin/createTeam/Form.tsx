'use client'
import React, {useState} from 'react'

function Form() {
  return (
    <>
    <form className='w-3/5 flex flex-col p-[5vmin] gap-y-10'>
        <div className='w-full flex justify-around'>
        <select name="eventName" id="eventName">
          <option value="Select Event" selected disabled hidden>Select Event</option>
          <option value="Mock IPL">Mock IPL</option>
          <option value="Hack n Pitch">Hack n Pitch</option>
          <option value="Three">Three</option>
          <option value="Four">Four</option>
          <option value="Five">Five</option>
          <option value="Six">Six</option>
          <option value="Seven">Seven</option>
        </select>
        <input type="text" name='teamName' placeholder="Team Name" />
        </div>
        <div>
        <input type="text" name='member1email' placeholder="Member 1 Email" />
        </div>
        <div>
        <input type="text" name='member2email' placeholder="Member 2 Email" />
        </div>
        <div>
        <input type="text" name='member3email' placeholder="Member 3 Email" />
        </div>
        <div>
        <input type="text" name='member4email' placeholder="Member 4 Email" />
        </div>
      </form>
    </>
  )
}

export default Form