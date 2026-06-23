import React, { useEffect } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Newsletter() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, [])

  return (
    <section className="py-16 px-6 lg:px-20 bg-orange-600">
      <div data-aos="fade-up" className="max-w-3xl mx-auto text-center">
        <FaPaperPlane className="text-white text-3xl mx-auto mb-4" />
        <h2 className="text-2xl lg:text-4xl font-fakhwang font-bold text-white mb-3">
          Subscribe To Our Newsletter
        </h2>
        <p className="text-white/80 text-sm font-poppins mb-8">
          Get the latest travel deals, tips and destination guides delivered straight to your inbox.
        </p>

        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:flex-1 px-5 py-3 rounded-md text-sm font-poppins outline-none bg-white text-gray-400 placeholder-gray-400"
          />
          <button className="w-full sm:w-auto bg-gray-900 hover:bg-black text-white text-sm px-8 py-3 font-semibold rounded-md cursor-pointer transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
