import React, { Fragment, useEffect, useState } from 'react'
import Header from '@/components/Header'
import { Transition } from '@headlessui/react';
import Sidebar from './Sidebar';

export default function Layout ({children}){
    const[showNav, setShowNav] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    function handleResize () {
        if (innerWidth <= 640) {
            setShowNav(false)
            setIsMobile(true)
        }else{
            setShowNav(true)
            setIsMobile(false)
        }
    }

    useEffect(()=>{
        if (typeof window != undefined){
            addEventListener('resize', handleResize)
        }

        return ()=>{
            removeEventListener ('resize', handleResize);
        }
    }, [])

  return (
    <>
        <Header showNav={showNav} setShowNav={setShowNav} />
        <Transition 
            as={Fragment}
            show={showNav}
            enter='transform transition duration-300'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transform transition duration-300 ease-in-out'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
        >
            <Sidebar showNav={showNav}/>
        </Transition>
        <main className={`pt-16 transition-all duration-300 ${showNav && !isMobile ? "pl-56" :''}`}>
            <div className='px-4 md:px-10'>
                {children}
            </div>
        </main>
    </>

  )
}

/*const Layout = () => {

    const[showNav, setShowNav] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    function handleResize () {
        if (innerWidth <= 640) {
            setShowNav(false)
            setIsMobile(true)
        }else{
            setShowNav(true)
            setIsMobile(false)
        }
    }

    useEffect(()=>{
        if (typeof window != undefined){
            addEventListener('resize', handleResize)
        }

        return removeEventListener ('resize', handleResize )
    }, [])

  return (
    <>
        <Header showNav={showNav} setShowNav={setShowNav} />
        <Transition 
            as={Fragment}
            show={showNav}
            enter='transform transition duration-300'
            enterFrom='translate-x-full'
            enterTo='translate-x-o'
            leave='transform transition duration-300'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-full'
        >
            <Sidebar/>
        </Transition>
        <main className={`pt-16 transition-all duration-300 ${showNav && !isMobile ? "pl-56" :''}`}>
            <div className='px-4 md:px-16'>
                {children}
            </div>
        </main>
    </>

  )
}

export default Layout */