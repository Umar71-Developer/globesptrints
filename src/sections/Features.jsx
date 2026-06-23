import React, { useEffect } from 'react'
import { features } from '../export'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Features() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, [])

  return (
    <section id="features" className="py-20 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-orange-600 font-semibold text-base uppercase tracking-wide mb-2">
            Our Features
          </p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl lg:text-5xl font-fakhwang font-bold text-gray-900">
            Why Travel With Us
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-orange-600 transition-colors duration-300">
                <feature.icon className="text-orange-600 text-2xl group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.name}</h3>
              <p className="text-sm text-gray-500 font-poppins leading-relaxed">{feature.about}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features