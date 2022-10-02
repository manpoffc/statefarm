import React from 'react'

type Props = {}

const Banner = (props: Props) => {
    return (
<div className=" w-full p-5 min-h-max lg:h-screen">
  <h1 className=" p-2 text-center text-3xl font-semibold text-slate-700">Coverage from nose to tail</h1>
  <p className="p-2 text-center font-light text-slate-700">We look after your little furr babies and ensure that we will give the best plans to protect your little family.</p>
  <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
    <div className="m-4 rounded-lg bg-blue-500 p-10 text-center text-2xl font-bold text-white shadow-2xl">
      <div className="space-y-4">
        <div className="h-full w-full">
          <img className="h-1/2" src="https://i.postimg.cc/tCVbNJL3/1912-i126-016-grooming-compositions-01-removebg-preview.png" alt="pawsome"/>
        </div>
        <h2 className="">Grooming</h2>
        <p className="text-base font-light">We will make your loved one's rock the new look everytime you visit us.</p>
      </div>
    </div>
    <div className="m-4 rounded-lg p-10 text-center text-2xl font-bold text-blue-500 shadow-2xl">
      <div className="space-y-4">
        <div className="h-full w-full">
          <img className="h-1/2" src="https://i.postimg.cc/hvjwjZq8/22656040-veterinarian-03-removebg-preview.png" alt="pawsome" />
        </div>
        <h2 className="">Vaccination</h2>
        <p className="text-base font-light">Our Insurance covers all type of vaccination required to protect your loved ones.</p>
      </div>
    </div>
    
    <div className="m-4 rounded-lg bg-blue-500 p-10 text-center text-2xl font-bold text-white shadow-2xl">
      <div className="space-y-4">
        <div className="h-full w-full">
          <img className="h-1/2" alt="pawsome" src="https://i.postimg.cc/y81ymgGx/6677-removebg-preview.png" />
        </div>
        <h2 className="">Surgery</h2>
        <p className="text-base font-light">Our expert pool of doctors are there to provide treatment to your family in tough times.</p>
      </div>
    </div>
    <div className="m-4 rounded-lg p-10 text-center text-2xl font-bold text-blue-500 shadow-2xl">
      <div className="space-y-4">
        <div className="h-full w-full">
          <img className="h-1/2" alt="pawsome" src="https://i.postimg.cc/FHT83QTt/2010-i121-044-isometric-gastroenterology-set-01-03-removebg-preview.png" />
        </div>
        <h2 className="">Medication</h2>
        <p className="text-base font-light">With over 10+ years of experience, we provide the best medical advice to our clients.</p>
      </div>
    </div>
  </div>
</div>
      )
}

export default Banner