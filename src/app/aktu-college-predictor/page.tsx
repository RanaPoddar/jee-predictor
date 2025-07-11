import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AKTU College Predictor 2025 | UP Engineering Admission Predictor',
  description: 'Predict your AKTU college admission chances. Find the best engineering colleges under AKTU based on your rank.',
  keywords: 'AKTU college predictor, UP engineering admission, AKTU counselling, UPTU college prediction',
}

export default function AKTUCollegePredictorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 py-4 sm:py-8">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            AKTU College Predictor 2025
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Predict your admission chances to AKTU affiliated engineering colleges in Uttar Pradesh.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              AKTU Predictor Coming Soon
            </h2>
            <p className="text-gray-600 mb-8">
              We&apos;re building a comprehensive predictor for AKTU (Dr. A.P.J. Abdul Kalam Technical University) admissions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">What&apos;s Coming:</h3>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Government college predictions</li>
                  <li>• Self-financed college options</li>
                  <li>• Regional quota analysis</li>
                  <li>• Course-wise cutoffs</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Popular Colleges:</h3>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• HBTI Kanpur</li>
                  <li>• MMMUT Gorakhpur</li>
                  <li>• KNIT Sultanpur</li>
                  <li>• And 800+ more colleges</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
