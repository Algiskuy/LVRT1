import React from 'react'
import HTML from "../foto/html.png"
import CSS from "../foto/css.png"
import JS from "../foto/js.png"
import RJS from "../foto/reactjs.png"
import Tailwind from "../foto/tailwind.png"

export default function Content_2() {
  return (<>
  <section>
    <div className='dark:text-white'><h3 className='text-3xl py-1 dark:text-white'>Services I offer</h3>
    <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">Since the beginning of my journey as a freelanve design and developer. I`ve done remote work for <span className='text-teal-500'>agencies</span> Consulted for <span className='text-teal-500'>starups</span> and collaborated with talanred people to create disign products for both business and consumer use. </p>
    <p className="text-md leading-8 text-gray-800 dark:text-white"> I offer from a wide range of services, including brand design, programming and teaching </p>
    </div>
    <div className='lg:flex gap-10 dark:text-white'>
        <div className='text-center  shadow-lg p-10 rounded-xl my-10'>
            <img src={HTML} width={100} height={100} className="mx-auto "/>
            <h2 className='text-lg font-mediun pt-8 pb2'>Beautiful Design </h2>
                <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic repudiandae magni ex repellendus quod debitis quis culpa ipsum nulla!</p>
                {/* <h4 className='py-4 text-teal-600 '>Desgin tools I use</h4>
                <p className='text-gray-800 dark:text-white'>Photoshop</p>
                <p className='text-gray-800 dark:text-white'>Illustrator</p>
                <p className='text-gray-800 dark:text-white'>Figma</p> */}
        </div>
        <div className='text-center  shadow-lg p-10 rounded-xl my-10 '>
            <img src={CSS} width={100} height={100} className="mx-auto "/>
            <h2 className='text-lg font-mediun pt-8 pb2'>Beautiful Design </h2>
                <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic repudiandae magni ex repellendus quod debitis quis culpa ipsum nulla!</p>
                {/* <h4 className='py-4 text-teal-600 '>Desgin tools I use</h4>
                <p className='text-gray-800 dark:text-white'>Photoshop</p>
                <p className='text-gray-800 dark:text-white'>Illustrator</p>
                <p className='text-gray-800 dark:text-white'>Figma</p> */}
        </div>
        <div className='text-center  shadow-lg p-10 rounded-xl my-10'>
            <img src={JS} width={100} height={100} className="mx-auto "/>
            <h2 className='text-lg font-mediun pt-8 pb2'>Beautiful Design </h2>
                <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic repudiandae magni ex repellendus quod debitis quis culpa ipsum nulla!</p>
                {/* <h4 className='py-4 text-teal-600 '>Desgin tools I use</h4>
                <p className='text-gray-800 dark:text-white'>Photoshop</p>
                <p className='text-gray-800 dark:text-white'>Illustrator</p>
                <p className='text-gray-800 dark:text-white'>Figma</p> */}
        </div>
    </div>
    <div className='lg:flex gap-10 dark:text-white'>
        <div className='text-center  shadow-lg p-10 rounded-xl my-10'>
            <img src={RJS} width={100} height={100} className="mx-auto "/>
            <h2 className='text-lg font-mediun pt-8 pb2'>Beautiful Design </h2>
                <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic repudiandae magni ex repellendus quod debitis quis culpa ipsum nulla!</p>
                {/* <h4 className='py-4 text-teal-600 '>Desgin tools I use</h4>
                <p className='text-gray-800 dark:text-white'>Photoshop</p>
                <p className='text-gray-800 dark:text-white'>Illustrator</p>
                <p className='text-gray-800 dark:text-white'>Figma</p> */}
        </div>
        <div className='text-center  shadow-lg p-10 rounded-xl my-10 '>
            <img src={Tailwind} width={100} height={100} className="mx-auto "/>
            <h2 className='text-lg font-mediun pt-8 pb2'>Beautiful Design </h2>
                <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic repudiandae magni ex repellendus quod debitis quis culpa ipsum nulla!</p>
                {/* <h4 className='py-4 text-teal-600 '>Desgin tools I use</h4>
                <p className='text-gray-800 dark:text-white'>Photoshop</p>
                <p className='text-gray-800 dark:text-white'>Illustrator</p>
                <p className='text-gray-800 dark:text-white'>Figma</p> */}
        </div>
        
    </div>
  </section>
  </>
  )
}
