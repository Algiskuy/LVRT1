import React from 'react'
import {FaGithub , FaGitlab,FaInstagramSquare } from 'react-icons/fa'
import deved from "../foto/dev-ed-wave.png"



export default function Content() {
  return (<>
    <div className='text-center p-10'>
      <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Welcome To My Portfolio Site</h2>
    <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden  md:w-96'>
      <img src={deved}  alt="foto" />
    </div>
      <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Frond End Developer.</h3>
      <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>
      Hi, I'm Algis Al Kausar from Bandung and I'm currently studying at the Kretek Programmers' Pondok. There I majored in Front End because I'm interested in css styles, tailwind etc which can make simple websites more attractive.
      </p>
    </div>
    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
      <a href="https://github.com/Algiskuy" target="blank"><FaGithub/></a>
      <a href="https://gitlab.com/Algiskuy" target="blank"><FaGitlab/></a>
      <a href="https://www.instagram.com/algisskar_/?hl=id" target="blank"><FaInstagramSquare/></a>
      
      
      
    </div>
  </>
  )
}
