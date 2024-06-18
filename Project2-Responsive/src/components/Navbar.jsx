import React, { useState } from 'react';
import {Menu,MenuIcon,X} from 'lucide-react'
import logo from '../assets/logo.png'
import { navItems } from '../constants';

const Navbar = () => {

    const [mobileDrawerOpen, setMobiledrawerOpen] = useState(false);

    const togglenNavbar = () => {
        setMobiledrawerOpen(!mobileDrawerOpen)
    }

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
        <div className='container px-4 mx-auto relative text-sm '>
            <div className='flex justify-between items-center'>
                <div className='flex items-center flex-shrink-0'>
                    <img src={logo} alt="logo" className='h-10 w-10 mr-2' />
                    <span className='text-xl tracking-tight'>VirtualR</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((items,index)=>(
                        <li key={index}>
                            <a href={items.href}>{items.label}</a>
                        </li>
                    ))}
                </ul>
                <div className='hidden lg:flex justify-center space-x-12 items-center'>
                    <a href="#" className='py-2 px-3 border rounded-md'>
                        Sign In
                    </a>
                    <a href="#"
                    className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                        Create an account
                    </a>
                </div>
                <div className='lg:hidden md:flex flex-col justify-end'>
                  <button onClick={togglenNavbar}>
                    {mobileDrawerOpen ? <X/> : <Menu/>}
                  </button>
                </div>
            </div>
            {
                mobileDrawerOpen && (
                    <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                    <ul className=''>
                    {navItems.map((items,index)=>(
                        <li key={index} className='py-4'>
                            <a href={items.href}>{items.label}</a>
                        </li>
                    ))}
                </ul>
                <div className='flex space-x-6'>
                    <a href="#" className='py-2 px-3 border rounded-md'> Sign In</a>
                    <a href="#" className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>Create an account</a>
                </div>
                    </div>
                )
            }
        </div>
    </nav>
  )
}



export default Navbar