import React, { useEffect } from 'react'
import about1 from '../assets/about1.webp'
import about2 from '../assets/about2.webp'
import { FaGlobeAmericas } from 'react-icons/fa'
import { IoIosPricetag } from 'react-icons/io'
import AOS from 'aos'

function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, [])

  return (
    <section id="about" className="py-20 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left - Images */}
        <div data-aos="fade-right" className="relative w-full lg:w-1/2">
          <img
            src={about1}
            alt="Travel destination"
            className="w-[90%] rounded-xl shadow-lg"
          />
          <img
            src={about2}
            alt="Adventure experience"
            className="w-[35%] rounded-xl shadow-lg absolute bottom-[-20px] left-[-10px] border-4 border-white rotate-[-5deg]"
          />
        </div>

        {/* Right - Content */}
        <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
          <p data-aos="fade-up" className="text-orange-600 font-semibold text-base uppercase tracking-wide mb-2">
            About Us
          </p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl lg:text-5xl font-fakhwang font-bold text-gray-900 leading-tight mb-6">
            We Provide Best Tour Packages In Your Budget
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-base text-gray-600 font-poppins leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatum. Rhoncus feugiat imperdiet per dolor adipiscing accumsan aenean turpis vivamus suspendisse ante ultrices felis primis.
          </p>

          {/* Features */}
          <div className="flex flex-col gap-5">
            <div data-aos="fade-up" data-aos-delay="300" className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-600 text-2xl">
                <FaGlobeAmericas />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">World Class Tour Facilities</h4>
                <p className="text-sm text-gray-500 font-poppins">
                  Augue nisi porttitor lobortis pharetra molestie conubia commodo duis himenaeos.
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-600 text-2xl">
                <IoIosPricetag />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Affordable Pricing Plans</h4>
                <p className="text-sm text-gray-500 font-poppins">
                  Augue nisi porttitor lobortis pharetra molestie conubia commodo duis himenaeos.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button data-aos="fade-up" data-aos-delay="500" className="mt-8 bg-orange-600 hover:bg-black text-white px-8 py-3 font-semibold capitalize rounded-md cursor-pointer transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default About