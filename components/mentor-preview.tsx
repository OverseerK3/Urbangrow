'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const featuredMentors = [
  {
    name: 'Maria Rodriguez',
    specialty: 'Urban Vegetable Gardens',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    name: 'John Chen',
    specialty: 'Vertical Gardening',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    name: 'Aisha Patel',
    specialty: 'Organic Pest Control',
    image: '/placeholder.svg?height=400&width=400',
  },
]

export function MentorPreview() {
  return (
    <section className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Learn from Experienced Farmers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Connect with our mentors and gain valuable insights for your urban farming journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredMentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    width={400}
                    height={400}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 font-display">{mentor.name}</h3>
                  <p className="text-emerald-600 font-semibold">{mentor.specialty}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            <Link href="/mentors">
              View All Mentors
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

