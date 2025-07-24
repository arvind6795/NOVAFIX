'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogOverlay, DialogTitle, DialogClose } from '@radix-ui/react-dialog';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';
import { useDarkMode } from '../components/DarkModeProvider';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [formData, setFormData] = useState({ name: '', email: '', device: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setShowSuccess(false);

    if (!formData.name || !formData.email || !formData.device) {
      setError('Please fill in all fields.');
      return;
    }

    setShowSuccess(true);
    setFormData({ name: '', email: '', device: '' }); // Clear form
    setTimeout(() => setIsOpen(false), 2000); // Auto-close modal after 2 seconds
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <header className="py-20 px-4 sm:px-6 md:px-8 text-center bg-gradient-to-r from-blue-500 to-purple-600 relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">NovaFix: Repair in 60 Minutes</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6">Fast, on-site smartphone and laptop repairs at your convenience.</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
            aria-label="Book a repair"
          >
            Book Repair Now
          </button>
          <button
            onClick={toggleDarkMode}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>

      <section className="py-16 px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: 'Screen Repair', icon: '/screen.webp' },
            { title: 'Battery Replacement', icon: '/battery.webp' },
            { title: 'Water Damage', icon: '/water.webp' },
          ].map((service) => (
            <motion.div
              key={service.title}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg text-center hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={service.icon}
                alt={`${service.title} icon`}
                width={64}
                height={64}
                loading="lazy"
                style={{ objectFit: 'contain' }}
                quality={75}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-semibold">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section ref={statsRef} className="py-16 px-4 sm:px-6 md:px-8 bg-gray-50 dark:bg-gray-800 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Devices Fixed</h2>
          <p className="text-5xl sm:text-6xl font-bold text-blue-600 dark:text-blue-400">
            {isInView ? <CountUp end={10000} duration={2} suffix="+" /> : '0'}
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Pricing</h2>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="p-4 text-sm sm:text-base">Device</th>
                <th className="p-4 text-sm sm:text-base">Screen Repair</th>
                <th className="p-4 text-sm sm:text-base">Battery Replacement</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-gray-600">
                <td className="p-4 text-sm sm:text-base">Smartphone</td>
                <td className="p-4 text-sm sm:text-base">$99</td>
                <td className="p-4 text-sm sm:text-base">$59</td>
              </tr>
              <tr className="border-b dark:border-gray-600">
                <td className="p-4 text-sm sm:text-base">Laptop</td>
                <td className="p-4 text-sm sm:text-base">$199</td>
                <td className="p-4 text-sm sm:text-base">$99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">FAQ</h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto" aria-label="Frequently Asked Questions">
          {[
            { q: 'How long does a repair take?', a: 'Most repairs are completed within 60 minutes.' },
            { q: 'Do you offer a warranty?', a: 'Yes, we provide a 90-day warranty on all repairs.' },
            { q: 'Can you repair at my location?', a: 'Yes, we come to your home or office for convenience.' },
            { q: 'What devices do you repair?', a: 'We repair all major smartphone and laptop brands.' },
          ].map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b dark:border-gray-600">
              <AccordionTrigger className="w-full text-left p-4 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="p-4">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogOverlay className="fixed inset-0 bg-black/50" />
        <DialogContent
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full"
          aria-describedby="Book a repair form"
        >
          <DialogTitle className="text-xl sm:text-2xl font-bold mb-4 sr-only">Book a Repair</DialogTitle> {/* Always present, visually hidden */}
          {showSuccess ? (
            <p className="text-green-600 dark:text-green-400 mb-4">Repair booked successfully!</p>
          ) : error ? (
            <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-semibold">Name</label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border dark:border-gray-600 rounded dark:bg-gray-700"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold">Email</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border dark:border-gray-600 rounded dark:bg-gray-700"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="device" className="block font-semibold">Device</label>
                <input
                  id="device"
                  type="text"
                  value={formData.device}
                  onChange={handleInputChange}
                  className="w-full p-2 border dark:border-gray-600 rounded dark:bg-gray-700"
                  required
                  aria-required="true"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          )}
          <DialogClose asChild>
            <button
              className="absolute top-2 right-2 text-gray-500 dark:text-gray-300"
              aria-label="Close modal"
            >
              ✕
            </button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}