import React from 'react'
import cat from '/images/cat-svgrepo-com.svg'
import catimg from '/images/cat.jpg'
import AnimatedText from './animatedText'
import Search from './search'


export default function Nav() {
  return (
    <div className=' w-full flex flex-row justify-around bg-transparent'>
        <div className=' flex justify-start'>
        <img src={catimg} alt="" className=' rounded-full sm:hidden xs:hidden' height={50} />
        <AnimatedText text={'Cat World'} className='!font-light text-2xl xs:text-lg sm:text-lg sm:!font-medium !p-3'/>
        </div>

        <ul className=' flex flex-row justify-between w-2/3 py-6 my-5'>
            <li className=' ml-6'>
               
            </li>
            <li className=' mr-9'><img src={cat} alt="sdfs" height={40} width={40} /></li>
        </ul>

    </div>
  )
}
