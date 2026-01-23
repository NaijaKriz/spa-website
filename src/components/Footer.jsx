import React from 'react'

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
            </div>
        </div>

    </footer>
  )
}

export default Footer