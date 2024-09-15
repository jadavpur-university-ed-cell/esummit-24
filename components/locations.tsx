import React from 'react'

const locations = () => {
    return (
        <div className="max-w-xl mx-auto text-center py-3 px-4 sm:px-6 lg:py-1 lg:px-8 ">
          <h3 className="text-sm font-light tracking-tight text-gray-50 sm:text-4xl">
            Visit Us at
          </h3>
          <div className="mt-1 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://maps.app.goo.gl/4ntxgJRBxd9KbuGQ7"
                className="inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-xl text-white ring-white"
              >
                Jadavpur Campus
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="https://maps.app.goo.gl/uUYSAwWVsdGvFcUT7"
                className="inline-flex items-center justify-center px-5 py-3 border  text-base font-medium rounded-xl text-white ring-white"
              >
                Salt Lake Campus
              </a>
            </div>
          </div>
        </div>
    )
  }

export default locations;
