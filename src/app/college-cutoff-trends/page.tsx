import { Metadata } from 'next'
import { BarChart3, TrendingDown, TrendingUp, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'College Cutoff Trends | Historical Cutoff Analysis',
  description: 'Analyze historical cutoff trends for engineering colleges. Track admission cutoffs over the years.',
  keywords: 'college cutoff trends, admission cutoffs, historical data, cutoff analysis, engineering college cutoffs',
}

export default function CollegeCutoffTrendsPage() {
  const colleges = [
    { name: "IIT Bombay CSE", trend: "up", change: "+125", color: "text-red-600" },
    { name: "IIT Delhi CSE", trend: "up", change: "+98", color: "text-red-600" },
    { name: "NIT Trichy CSE", trend: "down", change: "-45", color: "text-green-600" },
    { name: "IIIT Hyderabad CSE", trend: "up", change: "+67", color: "text-red-600" },
    { name: "NIT Warangal CSE", trend: "up", change: "+23", color: "text-red-600" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 py-4 sm:py-8">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            College Cutoff Trends
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Analyze historical cutoff trends and make informed decisions about college admissions.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                College Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent">
                <option value="">All Types</option>
                <option value="iit">IIT</option>
                <option value="nit">NIT</option>
                <option value="iiit">IIIT</option>
                <option value="gfti">GFTI</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Branch
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent">
                <option value="">All Branches</option>
                <option value="cse">Computer Science</option>
                <option value="ece">Electronics & Communication</option>
                <option value="me">Mechanical</option>
                <option value="ee">Electrical</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent">
                <option value="">All Categories</option>
                <option value="general">General</option>
                <option value="obc">OBC-NCL</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
                <option value="ews">EWS</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Year Range
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent">
                <option value="2024-2020">2024-2020</option>
                <option value="2023-2019">2023-2019</option>
                <option value="2022-2018">2022-2018</option>
              </select>
            </div>
          </div>
          
          {/* Quick Trends */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Trends Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {colleges.map((college, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2 truncate">
                    {college.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {college.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-red-500" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-green-500" />
                      )}
                      <span className={`text-sm font-medium ${college.color}`}>
                        {college.change}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">vs last year</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Coming Soon */}
          <div className="text-center py-16 border-t">
            <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Advanced Cutoff Analytics Coming Soon
            </h2>
            <p className="text-gray-600 mb-8">
              We're building comprehensive cutoff trend analysis with interactive charts and predictions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <Calendar className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <h3 className="font-semibold text-red-800 mb-2">Historical Data</h3>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• 10+ years of cutoff data</li>
                  <li>• Round-wise analysis</li>
                  <li>• Category-wise trends</li>
                  <li>• State quota vs AI quota</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <BarChart3 className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <h3 className="font-semibold text-orange-800 mb-2">Interactive Charts</h3>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Visual trend analysis</li>
                  <li>• Comparison tools</li>
                  <li>• Downloadable reports</li>
                  <li>• Custom date ranges</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <TrendingUp className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <h3 className="font-semibold text-yellow-800 mb-2">Predictions</h3>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Future cutoff predictions</li>
                  <li>• Trend analysis</li>
                  <li>• Statistical models</li>
                  <li>• Confidence intervals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
