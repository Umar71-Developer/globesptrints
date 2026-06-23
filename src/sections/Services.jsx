import React, { useEffect } from 'react'
import service1 from '../assets/service1.webp'
import service2 from '../assets/service2.webp'
import service3 from '../assets/service3.webp'
import service4 from '../assets/service4.webp'
import service5 from '../assets/service5.webp'
import service6 from '../assets/service6.webp'
import { FaPauseCircle } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const topRow = [
  { image: service1, title: 'Adventure Travel', place: 'Nepal' },
  { image: service2, title: 'Beach Holidays', place: 'Maldives' },
  { image: service3, title: 'Cultural Tours', place: 'Italy' },
]

const bottomRow = [
  { image: service4, title: 'Wildlife Safari', place: 'Kenya' },
  { image: service5, title: 'Cruise Packages', place: 'Caribbean' },
  { image: service6, title: 'Mountain Trekking', place: 'Switzerland' },
]

function ServiceCard({ service, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-72"
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-semibold">{service.title}</h3>
        <p className="text-sm text-gray-300">{service.place}</p>
        <FaPauseCircle className="text-white text-xl mt-2 cursor-pointer hover:text-gray-300 transition-colors" />
      </div>
    </div>
  )
}

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, [])

  return (
    <section id="services" className="py-20 px-6 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-orange-600 font-semibold text-base uppercase tracking-wide mb-2">
            Our Services
          </p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl lg:text-5xl font-fakhwang font-bold text-gray-900">
            What We Offer
          </h2>
        </div>

        {/* Top Row - right image is wide */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <ServiceCard service={topRow[0]} index={0} />
          <ServiceCard service={topRow[1]} index={1} />
          <div className="sm:col-span-2">
            <ServiceCard service={topRow[2]} index={2} />
          </div>
        </div>

        {/* Bottom Row - left image is wide */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2">
            <ServiceCard service={bottomRow[0]} index={3} />
          </div>
          <ServiceCard service={bottomRow[1]} index={4} />
          <ServiceCard service={bottomRow[2]} index={5} />
        </div>
      </div>
    </section>
  )
}

export default Services