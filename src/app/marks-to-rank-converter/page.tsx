import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marks to Rank Converter | JEE Main Score to Rank Calculator',
  description: 'Convert JEE Main marks to expected rank. Get accurate rank predictions based on your exam score.',
  keywords: 'marks to rank converter, JEE Main score calculator, marks rank conversion, JEE score predictor',
}

export default function MarksToRankConverterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-4 sm:py-8">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Marks to Rank Converter
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Convert your JEE Main raw marks to expected rank and percentile with our accurate prediction tool.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Marks to Rank Converter Coming Soon
            </h2>
            <p className="text-gray-600 mb-8">
              Advanced conversion tool with normalization and statistical analysis is under development.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
