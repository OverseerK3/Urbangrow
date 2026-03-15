'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, ShoppingBag, Sprout } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-500 transition-colors"
          >
            <Sprout className="h-6 w-6" />
            <span className="font-display text-xl">UrbanGrow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="text-gray-600 hover:text-emerald-500 transition-colors">Shop</Link>
            <Link href="/learn" className="text-gray-600 hover:text-emerald-500 transition-colors">Learn</Link>
            <Link href="/mentors" className="text-gray-600 hover:text-emerald-500 transition-colors">Mentors</Link>
            <Link href="/community" className="text-gray-600 hover:text-emerald-500 transition-colors">Community</Link>
            <Link href="/blog" className="text-gray-600 hover:text-emerald-500 transition-colors">Blog</Link>
            <Button variant="default" className="bg-emerald-600 hover:bg-emerald-500">
              Get Started
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b">
              <Link
                href="/shop"
                className="block px-3 py-2 text-gray-600 hover:text-emerald-500 transition-colors"
              >
                Shop
              </Link>
              <Link
                href="/learn"
                className="block px-3 py-2 text-gray-600 hover:text-emerald-500 transition-colors"
              >
                Learn
              </Link>
              <Link
                href="/mentors"
                className="block px-3 py-2 text-gray-600 hover:text-emerald-500 transition-colors"
              >
                Mentors
              </Link>
              <Link
                href="/community"
                className="block px-3 py-2 text-gray-600 hover:text-emerald-500 transition-colors"
              >
                Community
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-gray-600 hover:text-emerald-500 transition-colors"
              >
                Blog
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-500">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

