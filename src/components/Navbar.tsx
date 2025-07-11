'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown, Calculator, Search, BookOpen, Target } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null)

  const navItems = [
    {
      title: "Predictors",
      icon: <Target className="w-4 h-4" />,
      items: [
        { name: "JEE Main Predictor", href: "/jee-main-college-predictor", desc: "Predict engineering colleges" },
        { name: "JEE Advanced Predictor", href: "/jee-advanced-college-predictor", desc: "Top IIT predictions" },
        { name: "WBJEE Predictor", href: "/wbjee-college-predictor", desc: "West Bengal engineering" },
        { name: "AKTU Predictor", href: "/aktu-college-predictor", desc: "UP technical universities" }
      ]
    },
    {
      title: "Find College",
      icon: <Search className="w-4 h-4" />,
      href: "/college-finder"
    },
    {
      title: "Tools",
      icon: <Calculator className="w-4 h-4" />,
      items: [
        { name: "Percentile to Rank", href: "/percentile-to-rank-converter", desc: "Convert percentile scores" },
        { name: "Marks to Rank", href: "/marks-to-rank-converter", desc: "Convert raw marks" }
      ]
    },
    {
      title: "Resources",
      icon: <BookOpen className="w-4 h-4" />,
      items: [
        { name: "College Blogs", href: "/college-blogs", desc: "Latest insights & tips" },
        { name: "Cutoff Trends", href: "/college-cutoff-trends", desc: "Historical cutoff data" }
      ]
    }
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-xl border-b border-gray-100/50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white p-2 rounded-xl group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 shadow-md">
              <Target className="w-5 h-5" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-gray-800 tracking-tight">College</span>
              <span className="text-lg font-light text-indigo-600 tracking-tight">Predictor</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-0.5">
            {navItems.map((item) => (
              <div key={item.title} className="relative">
                {item.href ? (
                  // Single link item
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/70 rounded-lg font-medium transition-all duration-200 text-sm group"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                    <span>{item.title}</span>
                  </Link>
                ) : (
                  // Dropdown item
                  <div
                    className="group"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/70 rounded-lg font-medium transition-all duration-200 text-sm group">
                      <span className="group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                      <span>{item.title}</span>
                      <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    
                    {/* Enhanced Dropdown */}
                    <div className={`absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-gray-100/50 py-2 transition-all duration-300 backdrop-blur-sm ${
                      activeDropdown === item.title ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-2 scale-95'
                    }`}>
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="group/item block px-4 py-3 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 transition-all duration-200 border-b border-gray-50 last:border-b-0"
                        >
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-800 group-hover/item:text-indigo-600 transition-colors">
                              {subItem.name}
                            </span>
                            <span className="text-xs text-gray-500 mt-0.5 group-hover/item:text-indigo-500 transition-colors">
                              {subItem.desc}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/jee-main-college-predictor"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white px-5 py-2 rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 font-semibold text-sm transform hover:-translate-y-0.5 hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">Predict Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile CTA + Menu Button Container */}
          <div className="flex items-center space-x-3 lg:hidden">
            <Link
              href="/jee-main-college-predictor"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1.5 rounded-lg font-medium text-xs transition-all duration-200 active:scale-95"
            >
              Predict
            </Link>
            <button
              onClick={() => {
                setIsOpen(!isOpen)
                if (!isOpen) setMobileActiveDropdown(null) // Close mobile dropdowns when closing menu
              }}
              className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 space-y-2 bg-gradient-to-b from-gray-50/30 to-transparent">
            {navItems.map((item) => (
              <div key={item.title}>
                {item.href ? (
                  // Single link item for mobile
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition-all duration-200 mx-2 active:bg-indigo-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                ) : (
                  // Dropdown section for mobile with click functionality
                  <div className="mx-2 mb-3">
                    <button
                      onClick={() => setMobileActiveDropdown(mobileActiveDropdown === item.title ? null : item.title)}
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition-all duration-200 active:bg-indigo-100"
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span>{item.title}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        mobileActiveDropdown === item.title ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Mobile Dropdown Content */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      mobileActiveDropdown === item.title ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="space-y-1 ml-4">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 active:bg-indigo-100 border-l-2 border-gray-200 hover:border-indigo-300"
                            onClick={() => {
                              setIsOpen(false)
                              setMobileActiveDropdown(null)
                            }}
                          >
                            <div className="font-medium text-sm">{subItem.name}</div>
                            <div className="text-xs text-gray-500 mt-1">{subItem.desc}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 mx-2 border-t border-gray-200">
              <Link
                href="/jee-main-college-predictor"
                className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white px-4 py-3 rounded-xl font-semibold text-center text-sm shadow-lg active:scale-95 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Predict Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
