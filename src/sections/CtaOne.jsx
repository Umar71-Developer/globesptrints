import React, { useEffect } from 'react'
import cta1 from '../assets/cta1.webp'
import cta2 from '../assets/cta2.webp'
import { FaPlay } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

function CtaOne() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, [])

  return (
    <section id="cta" className="py-20 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left - Content */}
        <div className="w-full lg:w-1/2">
          <p data-aos="fade-up" className="text-orange-600 font-semibold text-base uppercase tracking-wide mb-2">
            Why Choose Us
          </p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl lg:text-5xl font-fakhwang font-bold text-gray-900 leading-tight mb-6">
            We Make Your Travel More Enjoyable
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-base text-gray-600 font-poppins leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatum rhoncus feugiat imperdiet per dolor adipiscing accumsan aenean turpis vivamus suspendisse ante ultrices felis primis.
          </p>

          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap gap-4">
            <button className="bg-orange-600 hover:bg-black text-white text-base px-8 py-3 font-semibold capitalize rounded-md cursor-pointer transition-colors duration-300">
              Get Started
            </button>
            <button className="flex items-center gap-2 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white text-base px-8 py-3 font-semibold capitalize rounded-md cursor-pointer transition-colors duration-300">
              <FaPlay className="text-sm" />
              Watch Video
            </button>
          </div>
        </div>

        {/* Right - Images */}
        <div data-aos="fade-left" className="relative w-full lg:w-1/2">
          <img
            src={cta1}
            alt="Travel experience"
            className="w-[85%] ml-auto rounded-xl shadow-lg"
          />
          <img
            src={cta2}
            alt="Explore destinations"
            className="w-[50%] rounded-xl shadow-lg absolute bottom-[-30px] left-0 border-4 border-white"
          />
        </div>
      </div>
    </section>
  )
}

export default CtaOne