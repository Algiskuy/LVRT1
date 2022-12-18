import Content from './Content/Content'
import Content_2 from './Content/Content_2'
import Portofolio from './Content/Portofolio'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {useState} from 'react'

function App() {
const [darkMode,setDarkMode] = useState (false)
  return (<>
    <div className={darkMode ? "dark" : ""}>
    <div className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900' >
     <section className=''>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl dark:text-white '>Algis Alkausar</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/></li>
              <li><a href="#" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 '>Resume</a></li>
            </ul>
        </nav>
      </section>
      <Content/>
      <Content_2/>
      <Portofolio/>
    </div>
    </div>

  </>
  )
}

export default App
