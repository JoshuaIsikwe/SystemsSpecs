import Image from 'next/image'
import React from 'react'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BiSearchAlt} from 'react-icons/bi'
import { PiSlideshowBold } from 'react-icons/pi'
import { Fragment } from "react";
import { Menu, Transition, Popover } from "@headlessui/react";

export default function Header({showNav, setShowNav}) {
    return (
        <div className={`fixed w-full h-16 bg-white flex justify-between items-center transition-all duration-300 ${showNav ? 'pl-56': ''}`}>
            <div className='pl-4 md:pl-10'>
                <PiSlideshowBold className='text-sm text-gray-700 cursor-pointer' onClick={()=> setShowNav(!showNav)}/>
            </div>
            <div className='flex items-center pr-4 md:pr-10'>
                <BiSearchAlt className='cursor-pointer text-2xl'/>
                <Popover className="relative">
                    <Popover.Button className="outline-none mr-5 md:mr-8 cursor-pointer text-gray-700">
                        <IoIosNotificationsOutline className="h-6 w-6" />
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform scale-95"
                        enterTo="transform scale-100"
                        leave="transition ease-in duration=75"
                        leaveFrom="transform scale-100"
                        leaveTo="transform scale-95"
                    >
                        <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen">
                        <div className="relative p-3">
                            <div className="flex justify-between items-center w-full">
                            <p className="text-gray-700 font-medium">Notifications</p>
                            <a className="text-sm text-orange-500" href="#">
                                Mark all as read
                            </a>
                            </div>
                            <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                            <div className="flex">
                                <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                                <IoIosNotificationsOutline className="h-4 w-4 text-green-600" />
                                </div>
                                <div className="ml-4">
                                <p className="font-medium text-gray-700">
                                    Notification Title
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                    Test Notification text for design
                                </p>
                                </div>
                            </div>
                            
                            <div className="flex">
                                <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                                <IoIosNotificationsOutline className="h-4 w-4 text-green-600" />
                                </div>
                                <div className="ml-4">
                                <p className="font-medium text-gray-700">
                                    Notification Title
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                    Test Notification text for design
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </div>
        </div>
    ) 
}
