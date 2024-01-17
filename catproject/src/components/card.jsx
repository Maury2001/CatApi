import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react'

export default function Card() {
    const [isOpen, setIsOpen]= useState(false)
  return (
    <div className=' text-black min-h-screen flex justify-center items-center'>
        <motion.div transition={{layout:{duration:1}}} layout onClick={()=> setIsOpen(!isOpen)}className='p-5 bg-white'>
            <motion.h2 layout>
                framer
            </motion.h2>
            {isOpen && (
            <motion.div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, sit inventore laboriosam facilis voluptate itaque explicabo quibusdam repellat enim incidunt! Quam velit soluta, cupiditate aspernatur architecto itaque eveniet nemo deleniti.
                </p>
            </motion.div>
            )}

        </motion.div>
        
    </div>
  )
}
