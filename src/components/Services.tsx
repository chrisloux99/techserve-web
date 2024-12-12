import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Server, Network, Wrench, Satellite, Wifi } from 'lucide-react';
import gsap from 'gsap';

const services = [
  {
    icon: Satellite,
    title: 'Satellite Network Installation',
    description: 'Professional installation and configuration of satellite networks for reliable connectivity.',
    details: `Our satellite network installation services include:
    • Site Survey and Planning
    • Professional Equipment Installation
    • Network Configuration
    • Signal Optimization
    • Quality Testing
    • Ongoing Maintenance
    • 24/7 Technical Support
    • Performance Monitoring`
  },
  {
    icon: Network,
    title: 'Network Infrastructure',
    description: 'Complete networking solutions including LAN/WAN design and implementation.',
    details: `Expert network infrastructure solutions:
    • Network Design and Architecture
    • LAN/WAN Implementation
    • Network Security Integration
    • Performance Optimization
    • Remote Access Solutions
    • Network Monitoring
    • Infrastructure Maintenance
    • Scalability Planning`
  },
  {
    icon: Server,
    title: 'IT Infrastructure',
    description: 'Comprehensive IT infrastructure and hardware solutions for businesses.',
    details: `Our IT infrastructure services include:
    • Server Installation & Management
    • Data Center Solutions
    • Hardware Procurement
    • System Integration
    • Backup & Recovery
    • IT Support & Maintenance
    • Infrastructure Security
    • Cloud Migration Services`
  },
  {
    icon: Wrench,
    title: 'Web & Software Development',
    description: 'Custom software solutions and modern web development services.',
    details: `Our development services include:
    • Custom Software Development
    • Web Application Development
    • Mobile App Development
    • E-commerce Solutions
    • UI/UX Design
    • CMS Development
    • API Integration
    • Website Maintenance
    • SEO Optimization
    • Performance Tuning`
  }
];

const ServiceCard = ({ icon: Icon, title, description, details }: {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleLearnMore = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      className="service-card bg-[#FFF8E7] rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="p-6">
        <div className="flex items-center justify-center mb-4">
          <Icon className={`w-12 h-12 ${isHovered ? 'text-[#32CD32]' : 'text-[#1E90FF]'} transition-colors duration-300`} />
        </div>
        <h3 className="text-xl font-bold text-[#1E90FF] mb-2 text-center">{title}</h3>
        <p className="text-gray-700 mb-4 text-center">{description}</p>
        <div className="mt-4 space-y-2">
          {details.split('\n').map((detail, index) => (
            <p key={index} className="text-sm text-gray-600">{detail}</p>
          ))}
        </div>
        <a 
          href="#contact" 
          onClick={handleLearnMore}
          className="block w-full mt-4 bg-[#1E90FF] text-[#FFF8E7] py-2 px-4 rounded text-center font-semibold hover:bg-[#32CD32] transition-colors duration-300"
        >
          Learn More
        </a>
      </div>
    </motion.div>
  );
};

const Services = () => {
  useEffect(() => {
    gsap.from('.service-card', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out'
    });
  }, []);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#FFF8E7] to-[#D4A76A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1E90FF] mb-4">Our Services</h2>
          <p className="text-gray-600">Comprehensive satellite and networking solutions for your business</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;