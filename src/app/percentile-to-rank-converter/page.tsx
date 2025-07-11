import { Metadata } from 'next'
import { Calculator, TrendingUp, BarChart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Percentile to Rank Converter | JEE Main Rank Calculator',
  description: 'Convert JEE Main percentile to rank accurately. Get your expected rank based on percentile score.',
  keywords: 'percentile to rank converter, JEE Main rank calculator, percentile rank conversion, JEE rank predictor',
}

export default function PercentileToRankConverterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 py-4 sm:py-8">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Percentile to Rank Converter
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Convert your JEE Main percentile to expected rank with our accurate conversion tool.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Percentile to Rank */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Calculator className="w-6 h-6 text-purple-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">Percentile to Rank</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter Your Percentile
                  </label>
                  <input
                    type="number"
                    placeholder="Enter percentile (0-100)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    min="0"
                    max="100"
                    step="0.01"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Session
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option value="2024">JEE Main 2024</option>
                    <option value="2023">JEE Main 2023</option>
                    <option value="2022">JEE Main 2022</option>
                  </select>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                  Convert to Rank
                </button>
              </div>
            </div>
            
            {/* Marks to Rank */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">Marks to Rank</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter Your Marks
                  </label>
                  <input
                    type="number"
                    placeholder="Enter marks (0-300)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                    max="300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Session
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="2024">JEE Main 2024</option>
                    <option value="2023">JEE Main 2023</option>
                    <option value="2022">JEE Main 2022</option>
                  </select>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Convert to Rank
                </button>
              </div>
            </div>
          </div>
          
          {/* Coming Soon */}
          <div className="text-center py-16 border-t">
            <BarChart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Rank Prediction Tools Coming Soon
            </h2>
            <p className="text-gray-600 mb-8">
              We're developing accurate conversion tools with historical data analysis.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Features</h3>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Real-time conversion</li>
                  <li>• Historical data analysis</li>
                  <li>• Multiple session support</li>
                  <li>• Category-wise predictions</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Accuracy</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Official NTA data</li>
                  <li>• Statistical models</li>
                  <li>• 99%+ accuracy</li>
                  <li>• Regular updates</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Additional Tools</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Rank trend analysis</li>
                  <li>• Comparison charts</li>
                  <li>• Downloadable reports</li>
                  <li>• Mobile-friendly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
