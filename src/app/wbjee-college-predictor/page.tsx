import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WBJEE College Predictor 2025 | West Bengal Engineering Admission',
  description: 'Predict your WBJEE college admission chances. Find the best engineering colleges in West Bengal based on your rank.',
  keywords: 'WBJEE college predictor, West Bengal engineering admission, WBJEE counselling, WBJEE college prediction',
}

export default function WBJEECollegePredictorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-4 sm:py-8">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            WBJEE College Predictor 2025
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Predict your chances of admission to top engineering colleges in West Bengal through WBJEE counselling.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              WBJEE Predictor Coming Soon
            </h2>
            <p className="text-gray-600 mb-8">
              We&apos;re developing a comprehensive WBJEE college predictor for West Bengal engineering admissions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Features:</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Government college predictions</li>
                  <li>• Private college recommendations</li>
                  <li>• Branch-wise cutoff analysis</li>
                  <li>• Category-wise predictions</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Colleges Covered:</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Jadavpur University</li>
                  <li>• Kalyani Government Engineering College</li>
                  <li>• Haldia Institute of Technology</li>
                  <li>• And many more...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
