import React from 'react'
import { AiFillTikTok } from 'react-icons/ai'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {/* Brand Section */}
                <div className="text-center md:text-left lg:text-center xl:text-left">
                    <div className="flex justify-center md:justify-start lg:justify-center xl:justify-start items-center mb-4">
                        <div className="relative">
                            <div className="absolute -inset-2 bg-amber-200 rounded-full blur opacity-30" />
                            <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-700
                            bg-clip-text text-transparent relative">
                                Bella Novera Spa
                            </h3>
                        </div>
                    </div>
                    <p className="text-amber-600 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 lg:mx-auto xl:mx-0 font-medium">
                        Experience tranquility and rejuvenation at Bella Novera Spa, your sanctuary for holistic wellness.
                    </p>
                </div>
                {/* Timing Section */}
                <div className="text-center md:text-left lg:text-center xl:text-left">
                    <h4 className="text-lg font-semibold text-amber-700 mb-4">Opening Hours</h4>
                    <ul className="space-y-2">
                        <li className="flex justify-between ">
                            <span className="text-gray-600">Monday - Friday</span>
                            <span className="text-gray-800">9:00 AM - 8:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="text-gray-600">Saturday</span>
                            <span className="text-gray-800">10:00 AM - 7:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="text-gray-600">Sunday</span>
                            <span className="text-gray-800">11:00 AM - 5:30 PM</span>
                        </li>
                    </ul>
                </div>
                {/* Quick Links */}
                <div className="text-center md:text-left">
                    <h4 className="text-lg font-semibold text-amber-800 mb-4 font-[poppins]">Quick Links</h4>
                    <ul className='space-y-3'>
                        {['Home', 'About', 'Services', 'Book Appointment'].map((link) => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} className="text-amber-600 hover:text-amber-800 transition-all
                                 duration-300 flex items-center justify-center md:justify-start font-medium group text-sm">
                                    <span className='bg-amber-200 group-hover:bg-amber-300 w-1 h-1 rounded-full mr-2 transition-colors'/>
                                    {link}
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>
                {/* Social Media */}
                <div className="text-center md:text-left">
                    <h4 className="text-lg font-semibold text-amber-800 mb-4 font-['poppins']">Follow Us</h4>
                    <div className="flex justify-center md:justify-start lg:space-x-5 space-x-4">
                        {[
                            {icon:<FiInstagram className='w-5 h-5' />,
                                color:'bg-amber-500',

                            },
                            {icon:<FiFacebook className='w-5 h-5' />,
                                color:'bg-amber-500',
                            },
                            {icon:<FiTwitter className='w-5 h-5' />,
                                color:'bg-amber-500',
                            },
                            {icon:<AiFillTikTok className='w-5 h-5' />,
                                color:'bg-amber-500',
                            }
                        ].map((social, index) => (
                            <a key={index} href="#" className={`p-2.5 rounded-full text-white hover:scale-110 
                            transition-all duration-300 flex items-center justify-center ${social.color}`}>
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            {/* Copyright divider */}
            <div className="mt-8 pt-6 border-t border-amber-100 text-center">
                <p className="text-sm text-amber-600">
                    &copy; {new Date().getFullYear()} Bella Novera Spa. All rights reserved.
                </p>
            </div>
        </div>

    </footer>
  )
}

export default Footer