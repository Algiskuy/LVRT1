import React from 'react'
import web1 from '../foto/web1.png'
import web2 from '../foto/web2.png'
import web3 from '../foto/web3.png'
import web4 from '../foto/web4.png'
import web5 from '../foto/web5.png'
import web6 from '../foto/web6.png'

export default function Portofolio() {
  return (<>
  <section>
    <div>
      <h3 className='text-3xl py-1 dark:text-white'>Portofolio</h3>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">Since the beginning of my journey as a freelanve design and developer. I`ve done remote work for <span className='text-teal-500'>agencies</span> Consulted for <span className='text-teal-500'>starups</span> and collaborated with talanred people to create disign products for both business and consumer use. </p>
    <p className="text-md leading-8 text-gray-800 dark:text-white"> I offer from a wide range of services, including brand design, programming and teaching </p>
    </div>
    <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap '>
      <div className='basis-1/3 flex-1'>
        <img src={web1} alt="foto" className='rounded-lg object-cover'width={'100%'} height={"100%"} layout="responsive"/>
      </div>
      <div className='basis-1/3 flex-1'>
        <img src={web2} alt="foto" className='rounded-lg object-cover'width={'100%'} height={"100%"} layout="responsive" />
      </div>
      <div className='basis-1/3 flex-1'>
        <img src={web3} alt="foto" className='rounded-lg object-cover'width={'100%'} height={"100%"} layout="responsive" />
      </div>
      <div className='basis-1/3 flex-1'>
        <img src={web4} alt="foto" className='rounded-lg object-cover'width={'100%'} height={"100%"} layout="responsive" />
      </div>
      <div className='basis-1/3 flex-1'>
        <img src={web5} alt="foto" className='rounded-lg object-cover'width={'100%'} height={"100%"} layout="responsive" />
      </div>
      <div className='basis-1/3 flex-1'>
        <img src={web6} alt="foto" className='rounded-lg object-cover'width={'100%'} height={"100%"} layout="responsive" />
      </div>
    </div>
  </section>
  </>
  )
}
