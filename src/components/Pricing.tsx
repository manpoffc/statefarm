import React from 'react'

type Props = {}

const Pricing = (props: Props) => {
  return (
    <div className=" w-full p-5 min-h-max md:h-screen md:mt-0">
  <h1 className="p-2 text-center text-3xl font-semibold text-slate-700">Our Plans</h1>
  <p className="p-2 text-center font-light text-slate-700">We look after your little furr babies and ensure that we will give the best plans to protect your little family.</p>
  <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-3 md:gap-7">
    <div className="m-4 rounded-lg bg-white p-10 text-center text-2xl font-bold text-blue-500 shadow-2xl">
      <div className="space-y-6">
        <h2 className="uppercase">Base</h2>
        <p className="mt-1 text-blue-500">
          <span className="text-4xl font-bold text-blue-500">$100</span>
          <span>/Month</span>
        </p>
        <ul className="text-base font-light">
          <li>Basic checkup</li>
          <li>Hair and Nail Cut</li>
          <li>Pet Shower</li>
          <li>Grooming</li>
        </ul>
        <div className="flex h-full w-full justify-center">
          <button className="w-3/4 rounded-full bg-blue-500 p-2 text-lg text-white transition duration-100 ease-in-out hover:bg-blue-700">Buy Now</button>
        </div>
      </div>
    </div>
    <div className="m-4 rounded-lg bg-blue-500 p-10 text-center text-2xl font-bold text-white shadow-2xl">
      <div className="space-y-6">
        <h2 className="uppercase">Popular</h2>
        <p className="mt-1 text-white">
          <span className="text-4xl font-bold text-white">$200</span>
          <span>/Month</span>
        </p>
        <ul className="text-base font-light">
          <li>Full body checkup</li>
          <li>Hair and Nail Cut</li>
          <li>Pet Shower</li>
          <li>Grooming</li>
          <li>Hair Treatment</li>
          <li>Grooming</li>
        </ul>
        <div className="flex h-full w-full justify-center">
          <button className="w-3/4 rounded-full bg-white p-2 text-lg text-blue-500">Buy Now</button>
        </div>
      </div>
    </div>
    <div className="m-4 rounded-lg bg-white p-10 text-center text-2xl font-bold text-blue-500 shadow-2xl">
      <div className="space-y-6">
        <h2 className="uppercase">Premium</h2>
        <p className="mt-1 text-blue-500">
          <span className="text-4xl font-bold text-blue-500">$350</span>
          <span>/Month</span>
        </p>
        <ul className="text-base font-light">
          <li>Full body checkup</li>
          <li>Hair and Nail Cut</li>
          <li>Pet Shower</li>
          <li>Grooming</li>
          <li>Hair Treatment</li>
          <li>Grooming</li>
          <li>Dental Treatment</li>
          <li>Surgery</li>
        </ul>
        <div className="flex h-full w-full justify-center">
          <button className="w-3/4 rounded-full bg-blue-500 p-2 text-lg text-white transition duration-100 ease-in-out hover:bg-blue-700">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Pricing