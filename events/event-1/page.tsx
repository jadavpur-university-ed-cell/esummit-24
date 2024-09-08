import React from 'react'

const Event = () => {
  return (<>
  <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Participate</h2>
                {/* <form action="#" method="POST" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"> */}
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      Team Name
                      //TODO: wrap this up to check with db if the team name is already taken
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="team-name"
                        id="team-name"
                        autoComplete="team-name"
                        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div> 
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Team Member 1
                    </label>
                    <div className="mt-1">
                      <input
                        placeholder='E-mail id of Team Member 1'
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Team Member 2
                    </label>
                    <div className="mt-1">
                      <input
                        placeholder='E-mail id of Team Member 2'
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Team Member 3
                    </label>
                    <div className="mt-1">
                      <input
                        placeholder='E-mail id of Team Member 3'
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Team Member 4
                    </label>
                    <div className="mt-1">
                      <input
                        placeholder='E-mail id of Team Member 4'
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  //TODO: Check if same emails cant be repeated
                  //TODO: Check if the email is a registered user
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-grape-600 hover:bg-grape-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grape-500">
                      Submit
                    </button>
                  </div>
                {/* </form> */}
              </div>
              </div>
  </>    
  )
}

export default Event