import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JEE Advanced College Predictor 2025 | IIT Admission Predictor',
  description: 'Predict your JEE Advanced college admission chances for IITs. Get accurate predictions based on your rank and category.',
  keywords: 'JEE Advanced college predictor, IIT admission predictor, JEE Advanced counselling, IIT college prediction',
}

export default function JEEAdvancedCollegePredictorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-4 sm:py-8">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            JEE Advanced College Predictor 2025
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Predict your chances of getting into IITs with our JEE Advanced college predictor. Enter your rank and get personalized IIT recommendations.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              JEE Advanced Predictor Coming Soon
            </h2>
            <p className="text-gray-600 mb-8">
              We're working on bringing you the most accurate JEE Advanced college predictor. 
              Stay tuned for updates!
            </p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">What to expect:</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Accurate IIT admission predictions</li>
                  <li>• Branch-wise cutoff analysis</li>
                  <li>• Historical data trends</li>
                  <li>• Category-wise predictions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
