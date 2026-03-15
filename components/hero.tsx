import { motion } from 'framer-motion'
import { ArrowRight, Leaf } from 'lucide-react'
// import { button } from '@/components/ui/button'

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 to-white pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ x: '-100%', y: Math.random() * 100 + '%', rotate: 0 }}
            animate={{
              x: '200%',
              y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              rotate: 360,
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Leaf className="text-emerald-100 h-12 w-12" />
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col lg:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:w-1/2"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Grow Your Urban Oasis with Expert Guidance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            Transform your urban space into a thriving garden with the help of experienced farmers. Get started with UrbanGrow today and cultivate your green thumb, no matter where you live.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              // size="lg"
              className="bg-emerald-600 hover:bg-emerald-500 text-lg group"
            >
              Start Growing
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              // size="lg"
              // variant="outline"
              className="text-lg border-emerald-600 text-emerald-600 hover:bg-emerald-50"
            >
              Meet Our Mentors
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="lg:w-1/2 mt-12 lg:mt-0"
        >
          <img
            src="/placeholder.svg?height=600&width=600"
            alt="Urban Garden with Mentor"
            className="w-full h-auto max-w-md mx-auto lg:max-w-none animate-float"
          />
        </motion.div>
      </div>
    </div>
  )
}
