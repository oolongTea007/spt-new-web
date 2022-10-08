import React from 'react'
import Image from 'next/image'

export default function FunctionCard({ data }) {
  return (
    <div className=' p-6 w-64 hover:shadow-card rounded-2xl'>
      <section className='flex justify-center'>
        <Image src={data.icon} alt=''></Image>
      </section>
      <section className='text-xl font-bold text-center mt-7 mb-4'>
        {data.title}
      </section>
      <section className='text-gray-400 leading-6'>
        {data.content}
      </section>
    </div>
  )
}
