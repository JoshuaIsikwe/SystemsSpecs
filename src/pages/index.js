import {BsClockFill} from 'react-icons/bs'
import {PiFunnelFill} from 'react-icons/pi'
import { IoIosNotifications } from 'react-icons/io'
import { GrFormClose} from 'react-icons/gr'
import {FaEye} from 'react-icons/fa'
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie } from "recharts";
import Image from 'next/image';
import inflow from '@/Illustrations/inflow.png'
import Link from 'next/link';



export default function Home() {

  const data = [
    {
      name: "January",
      uv: 1240000,
      pv: 2400000,
      amt: 2400
    },
    {
      name: "February",
      uv: 3000000,
      pv: 1290398,
      amt: 2210
    },
    {
      name: "March",
      uv: 2000000,
      pv: 3980210,
      amt: 2290
    },
    {
      name: "April",
      uv: 3070820,
      pv: 3909082,
      amt: 2000
    },
    {
      name: "May",
      uv: 1890222,
      pv: 4300030,
      amt: 2181
    },
    {
      name: "June",
      uv: 2390030,
      pv: 3807770,
      amt: 2500
    },
    {
      name: "July",
      uv: 3004290,
      pv: 7030220,
      amt: 2100
    },
    {
      name: "August",
      uv: 3490200,
      pv: 1430020,
      amt: 2100
    },
    {
      name: "September",
      uv: 3490127,
      pv: 4300000,
      amt: 2100
    },
    {
      name: "October",
      uv: 3111490,
      pv: 2004300,
      amt: 2100
    },
    {
      name: "November",
      uv: 2349350,
      pv: 1024300,
      amt: 2100
    },
    {
      name: "December",
      uv: 3490005,
      pv: 2430050,
      amt: 2100
    },
  ];

  const data01 = [
    { name: "Send money", value: 8478584 },
    { name: "Electricity", value: 6358938 },
    { name: "Airtime & Data", value: 3179469},
    { name: "TV subscription", value: 1695716 },
    { name: "RRR", value: 148362 },
  ];
  const data02 = [
    { name: "Send money", value: 404112 },
    { name: "Electricity", value: 101028},
    { name: "Airtime & Data", value: 168389 },
    { name: "TV subscription", value: 80 },
    { name: "RRR", value: 40 },
  ];


  return (
    <main className='mt-10 min-h-screen'>
        <section>
          <div className='w-full flex items-center justify-between mb-5 bg-yellow-400 rounded-md p-3 gap-5 '>
            <div className='flex gap-4'>
              <div className='flex gap-1 items-center'><IoIosNotifications  className='text-3xl -rotate-45 md:text-2xl'/>
                <p className='text-sm md:text-base'>You have (3) pending Fund Sweep Requests </p>
              </div>
              <button className='rounded-sm px-1 md:py-1 md:px-3 outline outline-1 cursor-pointer text-sm'>View Requests</button>
            </div>
            <button className='cursor-pointer'><GrFormClose className='text-3xl'/></button>
          </div>

          <div className='justify-between mb-3 hidden lg:flex'>
            <div className='flex gap-3 items-center'>
              <BsClockFill className='text-gray-700'/>
              <button className='rounded-xl bg-gray-300 p-2 shadow-md'>Today</button>
              <button className='rounded-xl bg-gray-300 p-2 shadow-md'>This Week</button>
              <button className='rounded-xl bg-blue-400 p-2 shadow-lg'>This month</button>
              <button className='rounded-xl bg-gray-300 p-2 shadow-md'>3 months</button>
              <button className='rounded-xl bg-gray-300 p-2 shadow-md'>6 months</button>
              <button className='rounded-xl bg-gray-300 p-2 shadow-md'>This Year</button>
            </div>

            <div className='mt-5 flex gap-5 items-center'>
              <div className='flex items-center gap-1'>
                <PiFunnelFill/> 
                <p> Date range</p>

                <div className='flex gap-2 text-gray-500'>
                  <p className='text-black'>from</p>
                  <p>DD/MM/YYYY</p>
                  <p className='text-black'>to</p>
                  <p>DD/MM/YYYY</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='min-h-screen grid grid-cols-10 gap-x-10 gap-10 mb-10 lg:gap-y-16'>
          <div className='col-span-10 md:col-span-3 lg:row-span-6 '>
            <h1 className='font-black text-lg mb-1 text-gray-600'>Transactions</h1>
            <div className='bg-white shadow-lg rounded-lg h-full flex flex-row md:flex-col'>
                 <ResponsiveContainer width="100%" className='m-auto' height={400}>
                  <PieChart >
                      <Pie
                        data={data01}
                        dataKey="value"
                        cx={200}
                        cy={200}
                        outerRadius={60}
                        fill="#8884d8"
                      />
                      <Pie
                        data={data02}
                        dataKey="value"
                        cx={200}
                        cy={200}
                        innerRadius={70}
                        outerRadius={90}
                        fill="#82ca9d"
                        label
                      />
                    </PieChart>
                 </ResponsiveContainer>
                 <div className='flex flex-row md:flex-col gap-3'>
                    {
                    data01.map((pie)=> {
                      <div className='flex flex-col'>
                      <h1>{pie.name}</h1>
                      <h1 className='font-bold'>{pie.value}</h1>
                  </div>
                    })
                    }
                 </div>
            </div>
          </div>
          <div className='col-span-10 lg:col-span-4 lg:row-span-3  '>
            <h1 className='font-black text-lg mb-1 text-gray-600'>Inflow & Outflow</h1>
            <div className='bg-white shadow-lg rounded-lg h-full'>
                <Image alt='chart' src={inflow}></Image>
            </div>
          </div>
          <div className='col-span-10 lg:col-span-3 lg:row-span-3'>
            <h1 className='font-black text-lg mb-1 text-gray-600'>Users</h1>
            <div className=' bg-gradient-to-br from-gray-800 to-gray-600 shadow-lg rounded-lg h-full'>
              <div className='p-4 gap-10 flex flex-row md:flex-col'>
                <div className='flex gap-2'>
                  <IoIosNotifications className='text-4xl text-gray-300'/>
                  <div className='text-white'>
                    <h1 className='font-black text-2xl'>5,600</h1>
                    <span className='text-xs'>Total Users</span>
                  </div>
                </div>

                <div className='flex flex-row md:flex-col gap-10 flex-wrap'>
                  <div className=' rounded-md flex'>
                   <div>
                    <div className='bg-white w-40 rounded-md pl-4 pr-30'>
                        <p className='font-bold'>4900</p>
                      </div> 
                      <span className='text-xs font-bold text-white'>Active Users</span>
                   </div>
                    <p className='ml-3 text-white'>85%</p>
                  </div>
                  <div className=' rounded-md flex'>
                    <div>
                      <div className='bg-white rounded-md pl-4 pr-30'>
                        <p className='font-bold'>700</p>
                      </div> 
                      <span className='text-xs font-bold text-white'>Active Users</span>
                    </div>
                    <p className='ml-3 text-white'>15%</p>
                  </div>
                </div>
                
                <Link href='' className='flex mr-2 text-gray-200 mt-10'>
                  <div className='flex gap-2 text-sm'>
                  <span><FaEye/></span> <p>View more</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-span-10 lg:col-span-7 lg:row-span-3'>
            <h1 className='font-black text-lg mb-1 text-gray-600'>Inflow & Outflow Trend</h1>
            <div className='bg-white shadow-lg rounded-lg h-full m-auto'>
              <ResponsiveContainer  width="100%"
                    height={400}>
                <LineChart
                    data={data}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 0
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
            </div>
          </div>
        </section>
    </main>
  )
}
