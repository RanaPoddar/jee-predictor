import PredictionForm from '@/components/PredictionForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JEE Main College Predictor 2025 | Predict Engineering Colleges',
  description: 'Predict your JEE Main college admission chances with our accurate college predictor. Get personalized college recommendations based on your rank.',
  keywords: 'JEE Main college predictor, engineering college admission, JEE Main counselling, college prediction tool',
}

export default function JEEMainCollegePredictorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-4 sm:py-8">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            JEE Main College Predictor 2025
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get accurate college predictions for JEE Main counselling. Enter your rank and preferences to find the best engineering colleges that match your profile.
          </p>
        </div>
        <PredictionForm />
      </div>
    </main>
  )
}
