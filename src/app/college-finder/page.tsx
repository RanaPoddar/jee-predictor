import { Metadata } from 'next'
import { Search, Filter, MapPin, GraduationCap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'College Finder | Find Best Engineering Colleges',
  description: 'Find the best engineering colleges based on your preferences, location, fees, and requirements.',
  keywords: 'college finder, engineering colleges, college search, best colleges, college comparison',
}

export default function CollegeFinderPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-4 sm:py-8">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            College Finder
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Find the perfect engineering college that matches your preferences, budget, and career goals.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
          {/* Search Filters */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Search className="w-4 h-4 inline mr-1" />
                  College Name
                </label>
                <input
                  type="text"
                  placeholder="Search colleges..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Location
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="">All States</option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="pune">Pune</option>
                  <option value="hyderabad">Hyderabad</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <GraduationCap className="w-4 h-4 inline mr-1" />
                  Course
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="">All Courses</option>
                  <option value="cse">Computer Science</option>
                  <option value="ece">Electronics & Communication</option>
                  <option value="me">Mechanical</option>
                  <option value="ce">Civil</option>
                  <option value="ee">Electrical</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Filter className="w-4 h-4 inline mr-1" />
                  College Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="">All Types</option>
                  <option value="iit">IIT</option>
                  <option value="nit">NIT</option>
                  <option value="iiit">IIIT</option>
                  <option value="gfti">GFTI</option>
                  <option value="private">Private</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fees Range (Annual)
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="">Any Budget</option>
                  <option value="0-50000">₹0 - ₹50,000</option>
                  <option value="50000-200000">₹50,000 - ₹2,00,000</option>
                  <option value="200000-500000">₹2,00,000 - ₹5,00,000</option>
                  <option value="500000+">₹5,00,000+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Admission Through
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="">Any Exam</option>
                  <option value="jee-main">JEE Main</option>
                  <option value="jee-advanced">JEE Advanced</option>
                  <option value="state-cet">State CET</option>
                  <option value="management">Management Quota</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  NIRF Ranking
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="">Any Ranking</option>
                  <option value="1-10">Top 10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-100">51-100</option>
                  <option value="100+">100+</option>
                </select>
              </div>
            </div>
            
            <button className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors font-semibold">
              Find Colleges
            </button>
          </div>
          
          {/* Coming Soon Message */}
          <div className="text-center py-16 border-t">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Advanced College Finder Coming Soon
            </h2>
            <p className="text-gray-600 mb-8">
              We're building a comprehensive college finder with detailed filters and recommendations.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Smart Filters</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Location-based search</li>
                  <li>• Fee range filters</li>
                  <li>• Course availability</li>
                  <li>• Placement statistics</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Detailed Info</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• College infrastructure</li>
                  <li>• Faculty details</li>
                  <li>• Alumni network</li>
                  <li>• Campus facilities</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Comparison Tool</h3>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Side-by-side comparison</li>
                  <li>• Ranking analysis</li>
                  <li>• Pros and cons</li>
                  <li>• Expert recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
