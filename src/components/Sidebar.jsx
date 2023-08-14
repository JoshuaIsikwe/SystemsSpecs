import React, { Fragment, forwardRef, useEffect, useState } from 'react'
import Header from '@/components/Header'
import logo from '@/Illustrations/Trinity-University-Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {PiFunnelFill, PiSlideshowBold} from 'react-icons/pi'
import { Menu, Transition } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs'
import { TbLogout} from 'react-icons/tb'
import pfp from '@/Illustrations/pfp.jpeg'



/*const links = [
    { href: '/account-settings', label: 'Account settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/sign-out', label: 'Sign out' },
  ]*/

const Sidebar = forwardRef (({showNav}, ref)=>{
    const router = useRouter();

    return (
        <div ref={ref} className='fixed w-56 h-full bg-white shadow-md'>
            <div className='flex flex-col md:flex-row justify-center items-center mt-6 mb-14'>
                <Image src={logo} width={50} alt='University Logo'></Image>
                <h1 className='font-bold ml-3'>Trinity University</h1>
            </div>

            <div className='flex flex-col text-sm'>
                <Link href='/'>
                    <div className={`pl-6 py-2 mx-3 rounded cursor-pointer mb-1 flex items-center transition-colors
                     ${router.pathname =='/' ? "text-blue-500"
                     : "text-black hover:bg-gray-200"
                    }`}>
                        <div>
                            <p>Overview</p>
                        </div>
                    </div>
                </Link>
                <Link href='/'>
                    <div className={`pl-6 py-2 mx-3 rounded cursor-pointer mb-1 flex items-center transition-colors
                     ${router.pathname =='/Users' ? "text-blue-500"
                     : "text-black hover:bg-gray-200"
                    }`}>
                        <div>
                            <p>Users</p>
                        </div>
                    </div>
                </Link>
                <Link href='/'>
                    <div className={`pl-6 py-2 mx-3 rounded cursor-pointer mb-1 flex items-center transition-colors
                     ${router.pathname =='/Wallets' ? "text-blue-500"
                     : "text-black hover:bg-gray-200"
                    }`}>
                        <div>
                            <p>Wallets</p>
                        </div>
                    </div>
                </Link>
                <Link href='/'>
                    <div className={`pl-6 py-2 mx-3 rounded cursor-pointer mb-1 flex items-center transition-colors
                     ${router.pathname =='/Transactions' ? "text-blue-500"
                     : "text-black hover:bg-gray-200"
                    }`}>
                        <div>
                            <p>Transactions</p>
                        </div>
                    </div>
                </Link>
                <Link href='/'>
                    <div className={`pl-6 py-2 mx-3 rounded cursor-pointer mb-1 flex items-center transition-colors
                     ${router.pathname =='/PostedRequests' ? "text-blue-500"
                     : "text-black hover:bg-gray-200"
                    }`}>
                        <div>
                            <p>Posted Requests</p>
                        </div>
                    </div>
                </Link>
                <Link href='/'>
                    <div className={`pl-6 py-2 mx-3 rounded cursor-pointer mb-1 flex items-center transition-colors
                     ${router.pathname =='/Cards' ? "text-blue-500"
                     : "text-black hover:bg-gray-200"
                    }`}>
                        <div>
                            <p>Cards</p>
                        </div>
                    </div>
                </Link>
                <Link href='/Funds'>
                    <div className={`pl-6 py-2 mx-3 rounded cursor-pointer mb-1 flex items-center transition-colors
                     ${router.pathname =='/Funds' ? "text-blue-500"
                     : "text-black hover:bg-gray-200"
                    }`}>
                        <div>
                            <p>Funds Sweep Requests</p>
                        </div>
                    </div>
                </Link>
                <Link href='/'>
                    <div className={`pl-6 py-2 mx-3 rounded cursor-pointer mb-1 flex items-center transition-colors
                     ${router.pathname =='/Report' ? "text-blue-500"
                     : "text-black hover:bg-gray-200"
                    }`}>
                        <div>
                            <p>Report</p>
                        </div>
                    </div>
                </Link>
                <Link href='/'>
                    <div className={`pl-6 py-2 mx-3 rounded cursor-pointer mb-1 flex items-center transition-colors
                     ${router.pathname =='/Messaging' ? "text-blue-500"
                     : "text-black hover:bg-gray-200"
                    }`}>
                        <div>
                            <p>Messaging</p>
                        </div>
                    </div>
                </Link>
                <Link href='/'>
                    <div className={`pl-6 py-2 mx-3 rounded cursor-pointer mb-1 flex items-center transition-colors
                     ${router.pathname =='/Disburse' ? "text-blue-500"
                     : "text-black hover:bg-gray-200"
                    }`}>
                        <div>
                            <p>Disburse Account</p>
                        </div>
                    </div>
                </Link>

                <Menu as='div' className='relative mt-10 inline-block text-left'>
                    <div>
                        <Menu.Button className='inline-flex w-full justify-center '>
                            <Image src={pfp}
                            width={30}
                            alt='profile picture'
                            className='rounded-full md:mr-4 border-2 border-white shadow-sm'
                            />
                            <div className='text-left'>
                                <span className='flex gap-1 font-medium '>Adesina Olaolu <BsChevronDown/></span>
                                <span className='text-xs text-gray-500'>Financial</span>
                                <div>
                                    <span className='text-xs flex mt-4 text-gray-500'><TbLogout/> Logout</span>
                                </div>
                            </div>
                        </Menu.Button>
                    </div>
                    <Transition 
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform scale-95'
                    enterTo='transform scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform scale-100'
                    leaveTo='transform scale-95'
                    >
                        <Menu.Items className="absolute right-0 block w-56 z-50 mt-2 origin-top-right bg-gray-300 rounded shadow-sm">
                            <div className='p-1'>
                                <Menu.Item>
                                    <Link className='text-blue-400' href='/'>About Trinity</Link>
                                </Menu.Item>
                            </div>
                            <div className='p-1'>
                                <Menu.Item>
                                    <Link className='text-blue-400' href='/'>Other Admins</Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
})

Sidebar.displayName = "Sidebar";

export default Sidebar
