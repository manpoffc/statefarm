import React, { useRef } from 'react'
type Props = {}

const Header = (props: Props) => {
   
  return (
    <header>
  <nav className="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
      <a href="#" className="flex items-center">
      <img src="https://i.postimg.cc/rmfJrP28/cute-labrador-dog-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-13867.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">PawSome</span>
      </a>
      <div className="flex items-center lg:order-2">
        <a href="#" className="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:px-5 lg:py-2.5">Account</a>
        <a href="#" className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr-2 bg-white px-4 py-2 text-sm font-medium text-gray-800 focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5 rounded-full">Get Quote</a>
      </div>
      <div className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto" id="mobile-menu-2">
        <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
          <li>
            <a href="#" className="bg-primary-700 lg:text-primary-700 block rounded py-2 pr-4 pl-3 text-white dark:text-white lg:bg-transparent lg:p-0" aria-current="page">Plans</a>
          </li>
          <li>
            <a href="#" className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white">Clinics</a>
          </li>
          <li>
            <a href="#" className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white">Services</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

    
  )
}       

export default Header