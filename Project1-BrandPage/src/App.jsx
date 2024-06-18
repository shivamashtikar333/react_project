import { useState } from 'react'
import logo from './assets/brand_logo.png'
import frame from './assets/Frame.png'
import flipkart from './assets/flipkart.png'
import amazon from './assets/amazon.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='max-w-full bg-white shadow-md h-16  '>
    <nav className='flex justify-between items-center font-bold my-3'>
      <div className='mx-auto'>
      <img src={logo} alt='logo' className='w-30' />
      </div>
      
      <ul className=' w-1/4 flex justify-evenly text-lg font-bold'>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    
      
      <div className='mx-auto  bg-red-700 w-20 text-center h-auto rounded-md text-white px-2 py-2'><button className=''>Login</button></div>

    </nav>
   </div>

  <div className=' max-w-full'>
  <div className=' w-2/4 flex justify-center  bg-white shadow-lg my-32 mx-auto'>
    <div className=' w-1/2 flex-wrap'>
      <h2 className='text-9xl'>YOUR FEET DESERVE THE BEST</h2>
    <div className='w-2/3 mt-12 font-medium text-gray-700'>
    <p>YOUR FEET DESEREVE TEH BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES</p>
    </div>
    <div className=' flex mt-8 gap-12'>
      <div className='bg-red-700 px-4 py-2 rounded-md text-white text-xl'>
        <button> Shop Now</button>
      </div>
      <div className='bg-transparent px-4 py-2 border-solid border-4 border-gray-500 rounded-md text-gray-500 text-xl font-bold'>
        <button>Category</button>
      </div>
    </div>
    <div className='text-gray-500 text-xl mt-8'><p>Also Avaiable On</p></div>
    <div className='flex gap-4 my-4'>
      <div className=''>
        <img src={flipkart} alt="flipkart" />
      </div>
      <div>
        <img src={amazon} alt="amazon" />
      </div>
    </div>
    </div>
    <div>
      <img src={frame} alt='shoes' className='w-[512px] my-[10%] '/>
    </div>
   </div>
  </div>
   </>
  )
}

export default App
