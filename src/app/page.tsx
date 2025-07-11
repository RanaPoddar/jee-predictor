import Link from 'next/link'
import { Search, TrendingUp, Calculator, BookOpen } from 'lucide-react'
import Navbar from '@/components/Navbar'

export default function Home() {
  const features = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "College Predictors",
      description: "Predict colleges for JEE Main, JEE Advanced, WBJEE, AKTU & more counselling processes",
      links: [
        { name: "JEE Main Predictor", url: "/jee-main-college-predictor" },
        { name: "JEE Advanced Predictor", url: "/jee-advanced-college-predictor" },
        { name: "WBJEE Predictor", url: "/wbjee-college-predictor" },
        { name: "AKTU Predictor", url: "/aktu-college-predictor" }
      ],
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "College Finder & Trends",
      description: "Find the best colleges and analyze historical cutoff trends to make informed decisions",
      links: [
        { name: "Find Best Colleges", url: "/college-finder" },
        { name: "View Cutoff Trends", url: "/college-cutoff-trends" }
      ],
      color: "bg-green-50 border-green-200 hover:bg-green-100"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Rank Predictor",
      description: "Convert percentile to rank and marks to rank with accurate predictions",
      links: [
        { name: "Percentile to Rank", url: "/percentile-to-rank-converter" },
        { name: "Marks to Rank", url: "/marks-to-rank-converter" }
      ],
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100"
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Complete
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Engineering</span>
              <br />
              Admission Guide
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Get accurate college predictions, find the best institutions, analyze trends, and make informed decisions for your engineering career.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search colleges, courses, or ask questions..."
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Search
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16">
              <Link href="/jee-main-college-predictor" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                JEE Main Predictor
              </Link>
              <Link href="/college-finder" className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                Find Colleges
              </Link>
              <Link href="/percentile-to-rank-converter" className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
                Rank Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Everything You Need for
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Engineering Admissions</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and resources to navigate engineering college admissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className={`group relative p-5 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${feature.color}`}>
                {/* Icon Container */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-md mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-blue-600 [&>svg]:w-6 [&>svg]:h-6">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {feature.description}
                </p>
                
                {/* Links */}
                <div className="space-y-2">
                  {feature.links.map((link, linkIndex) => (
                    <Link 
                      key={linkIndex}
                      href={link.url}
                      className="group/link flex items-center justify-between p-2.5 bg-white/70 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 border border-gray-100"
                    >
                      <span className="font-medium text-gray-700 group-hover/link:text-blue-600 transition-colors text-sm">
                        {link.name}
                      </span>
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center group-hover/link:bg-blue-600 transition-all duration-200">
                        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-blue-600 group-hover/link:border-white transform rotate-45 transition-colors"></div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Decorative element */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-blue-200 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <div className="text-center sm:text-left">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  Need help choosing the right tool?
                </h3>
                <p className="text-gray-600 text-xs">
                  Our expert team is here to guide you through your admission journey.
                </p>
              </div>
              <Link 
                href="/college-finder"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold text-sm whitespace-nowrap hover:shadow-md transform hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Engineering Colleges</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">6+</div>
              <div className="text-gray-600">Exam Predictors</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">99%</div>
              <div className="text-gray-600">Prediction Accuracy</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">50K+</div>
              <div className="text-gray-600">Students Helped</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 sm:p-12 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Find Your Dream College?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start your journey with our most popular college predictor
            </p>
            <Link 
              href="/jee-main-college-predictor"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors"
            >
              Start Predicting Now
            </Link>
          </div>
        </div>
      </section>
      </main>
    </>
  )
}
