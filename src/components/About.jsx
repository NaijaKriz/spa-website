import React from 'react'
import { FiScissors, FiUser, FiHeart, FiAward } from 'react-icons/fi';
import { GiLipstick } from 'react-icons/gi';
import imgabout from '../assets/imgabout.jpg'

const About = () => {
    const features = [
    {
        icon: <FiScissors className="w-8 h-8" />,
        title: "Expert Stylists",
        desc: "Certified professionals with artistic vision"
    },
    {
        icon: <GiLipstick className="w-8 h-8" />,
        title: "Premium Products",
        desc: "Luxury brands for ultimate beauty experience"
    },
    {
        icon: <FiUser className="w-8 h-8" />,
        title: "Custom Care",
        desc: "Personalized beauty solutions for you"
    },
    {
        icon: <FiHeart className="w-8 h-8" />,
        title: "Passionate Team",
        desc: "Dedicated to enhancing your natural beauty"
    }
];
  return (
    <section id="about" className='py-24 bg-gradient-to-b from-rose-200 to-pink-100'>
        <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image Section */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r to-pink-200 from-rose-200  rounded-3xl 
                        transform rotate-2 group-hover:rotate-3 transition-all duration-300"/>
                        <div className="relative bg-pink-100 rounded-3xl p-8 transform">
                            <div className="relative bg-rose-100 rounded-3xl p-4 md:p-8 transform hover:scale-105
                            transition-all duration-300">
                                <div className="aspect-square rounded-2xl overflow-hidden">
                                    <img src={imgabout} alt="" />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About