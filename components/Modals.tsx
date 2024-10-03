import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import {CheckBadgeIcon} from '@heroicons/react/24/outline'
import {ExclamationCircleIcon} from '@heroicons/react/24/outline'
import {XMarkIcon} from '@heroicons/react/24/outline'

export function Warning({showWarning,setShowWarning}:{
  showWarning:{
    show:boolean,
    title:string,
    msg:string
  },
  setShowWarning:Function
}) {
  const [show, setShow] = useState(true)

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={showWarning.show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-gray-700 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {/* <InboxIcon className="h-6 w-6 text-gray-400" aria-hidden="true" /> */}
                    <ExclamationCircleIcon className="h-6 w-6 text-red-400" aria-hidden="true"/>    
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-100">{showWarning.title}</p>
                    <p className="mt-1 text-sm text-[#eae2b7]">
                      {showWarning.msg}
                    </p>
                    <div className="mt-3 flex space-x-7">
                      {/* <button
                        type="button"
                        className="bg-white rounded-md text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={()=>{
                          const obj = {...showWarning};
                          obj.show = false
                          setShowWarning(obj);
                        }}
                      >
                        Dismiss
                      </button> */}
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      className="bg-gray-700 rounded-md inline-flex text-gray-200 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fcbf47]"
                        onClick={()=>{
                          const obj = {...showWarning};
                          obj.show = false
                          setShowWarning(obj);
                        }}
                    >
                       <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" /> 
                      {/* <XIcon className="h-5 w-5" aria-hidden="true" /> */}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}




export function Success({showSuccess,setShowSuccess}:
{showSuccess:{show:boolean,title:string,msg:string},
  setShowSuccess:Function})
  {
    let obj =  {...showSuccess};
  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={showSuccess.show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-gray-700 shadow-lg rounded-lg pointer-events-auto ring-1 ring-[#eae2b7] ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckBadgeIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-100">{showSuccess.title}</p>
                    <p className="mt-1 text-sm text-gray-200">{showSuccess.msg}</p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      className="bg-gray-700 rounded-md inline-flex text-[#eae2b7] hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fcbf47]"
                      onClick={() => {
                        obj.show = false;
                        setShowSuccess(obj);
                      }}
                    >
                       <XMarkIcon className="h-5 w-5 text-black" aria-hidden="true" /> 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}