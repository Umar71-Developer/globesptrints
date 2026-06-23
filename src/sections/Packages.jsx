import React, { useEffect } from 'react'
import { tourpackages } from '../export'
import { FaCalendarAlt, FaUsers } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Packages() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, [])

  return (
    <section id="packages" className="py-20 px-6 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-orange-600 font-semibold text-base uppercase tracking-wide mb-2">
            Tour Packages
          </p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl lg:text-5xl font-fakhwang font-bold text-gray-900">
            Popular Destinations
          </h2>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourpackages.map((pkg, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-orange-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {pkg.price}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-sm text-gray-500 font-poppins leading-relaxed mb-4">{pkg.about}</p>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-5">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-orange-600" />
                    {pkg.days}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaUsers className="text-orange-600" />
                    {pkg.pax} People
                  </span>
                </div>

                <button className="w-full bg-orange-600 hover:bg-black text-white text-base py-3 font-semibold rounded-md cursor-pointer transition-colors duration-300">
                  {pkg.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages