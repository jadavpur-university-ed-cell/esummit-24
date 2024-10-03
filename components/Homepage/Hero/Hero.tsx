import React from 'react'
import Background from '../Background/Background'
import HeroComponent from './Root'

const Hero = () => {
  return (
    <>
    {/* <Background /> */}
    <div className='bg-transparent'>
    <HeroComponent/>
    </div>
    </>
  )
}

export default Hero