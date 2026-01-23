import React, { useState } from 'react'
import { FiCalendar, FiHome, FiMenu, FiX } from 'react-icons/fi'
import { LuUserCog } from 'react-icons/lu'
import { RiCustomerService2Line } from 'react-icons/ri'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [navShadow, setNavShadow] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="fixed w-full z-50 transition-all duration-500">
      <div className={`bg-white backdrop-blur-2xl ${navShadow ? 'shadow-xl' : 'shadow-md'}`}>
        <nav className="border-b border-pink-400/20">
          <div className="container mx-auto px-4 md:px-6 py-4">

            {/* MAIN FLEX CONTAINER */}
            <div className="flex items-center">

              {/* LOGO */}
              <div className="flex-1">
                <span className="cursor-pointer text-2xl md:text-3xl font-bold 
                  bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent 
                  font-[poppins] tracking-tighter">
                  Bella Novera Spa
                </span>
              </div>

              {/* CENTER MENU */}
              <div className="hidden md:flex flex-1 justify-center items-center space-x-6 lg:space-x-10">
                <Link
                  to="home"
                  spy
                  smooth
                  className="flex items-center cursor-pointer text-gray-800 hover:text-pink-800 
                  transition-all duration-300 relative group font-[poppins] font-medium"
                >
                  <FiHome className="mr-1 lg:mr-2" />
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-700 transition-all duration-300 group-hover:w-full" />
                </Link>

                <Link
                  to="about"
                  spy
                  smooth
                  className="flex items-center cursor-pointer text-gray-800 hover:text-pink-800 
                  transition-all duration-300 relative group font-[poppins] font-medium"
                >
                  <LuUserCog className="mr-1 lg:mr-2" />
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-700 transition-all duration-300 group-hover:w-full" />
                </Link>

                <Link
                  to="services"
                  spy
                  smooth
                  className="flex items-center cursor-pointer text-gray-800 hover:text-pink-800 
                  transition-all duration-300 relative group font-[poppins] font-medium"
                >
                  <RiCustomerService2Line className="mr-1 lg:mr-2" />
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-700 transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>

              {/* BOOK BUTTON */}
              <div className="hidden md:flex flex-1 justify-end">
                <Link
                  to="contact"
                  spy
                  smooth
                  className="flex items-center bg-pink-400 hover:bg-pink-600 text-white 
                  px-4 py-2 lg:px-6 rounded-lg hover:shadow-lg hover:scale-105
                  transition-all duration-300 cursor-pointer font-[poppins] font-semibold 
                  border border-pink-300"
                >
                  <FiCalendar className="mr-1 lg:mr-2" />
                  Book Now
                </Link>
              </div>

              {/*Mobile Toggle*/}
              <button className="md:hidden text-gray-800 hover:text-pink-700 transition-colors duration-300 p-2" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <FiX size={28} />:<FiMenu size={28}/>}
              </button>

            </div>
          </div>
        </nav>
      </div>


      {/*Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-pink-200/95 backdrop-blur-lg">
            <button  className="absolute top-4 right-4 text-gray-800 hover:text-pink-700 transition-colors duration-300 p-2">
                <FiX onClick={() =>setIsMenuOpen(false)} size={28} />
            </button>
            <div className="bg-pink-100/90 border border-pink-300/20 rounded-xl shadow-2xl p-8 space-y-8 w-11/12 max-w-sm">
                <Link to='home' spy={true} smooth={true}
                    className="flex flex-col items-center text-gray-800 hover:text-pink-700 transition-all duration-300 font-[poppins] text-xl"
                    onClick={() =>setIsMenuOpen(false)}>
                        <FiHome className='mb-2 text-2xl'/>
                        Home
                </Link>
                <Link to='about' spy={true} smooth={true}
                    className="flex flex-col items-center text-gray-800 hover:text-pink-700 transition-all duration-300 font-[poppins] text-xl"
                    onClick={() =>setIsMenuOpen(false)}>
                        <LuUserCog className='mb-2 text-2xl'/>
                        About
                </Link>
                <Link to='services' spy={true} smooth={true}
                    className="flex flex-col items-center text-gray-800 hover:text-pink-700 transition-all duration-300 font-[poppins] text-xl"
                    onClick={() =>setIsMenuOpen(false)}>
                        <RiCustomerService2Line className='mb-2 text-2xl'/>
                        Services
                </Link>

                <Link to='contact' className='flex flex-col items-center bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-xl 
                    transition-all duration-300 font-[poppins] font-semibold text-lg'spy={true} smooth={true} onClick={()=>setIsMenuOpen(false)}>
                        <FiCalendar className='mb-2 text-2xl'/>
                        Book Now
                    </Link>
            </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
