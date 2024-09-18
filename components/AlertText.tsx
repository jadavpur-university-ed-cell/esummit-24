import React from 'react'

const alert = () => {
  return (
    <>
    <div className="py-6 sm:py-4 px-4 mx-auto  text-center lg:py-8 lg:px-12">
        <div className="inline-flex justify-between items-center  py-1 sm:px-1 sm:pr-4 text-sm text-gray-700 rounded-2xl sm:rounded-full bg-gray-800 dark:text-white hover:bg-gray-700" role="alert">
            <span className="sm:text-sm text-sm rounded-full text-white p-1 sm:p-1 sm:px-4 py-1.5 sm:mr-3">Plethora of Events Ranging from Hackathon to Boardroom awaits, all in just 3 days!</span>
            {/* <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg> */}
        </div>
    </div>
    </>
  )
}

export default alert