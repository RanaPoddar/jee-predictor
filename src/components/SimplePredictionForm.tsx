'use client'
import { useState } from 'react'

interface PredictionResult {
  institute: string | null;
  academicProgram: string | null;
  seatType: string | null;
  gender: string | null;
  openingRank: string | null;
  closingRank: string | null;
  quota: string | null;
  instituteType: string | null;
  year: bigint | null;
  round: bigint | null;
}

export default function SimplePredictionForm() {
  const [rank, setRank] = useState('')
  const [results, setResults] = useState<PredictionResult[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const predict = async () => {
    if (!rank || isNaN(Number(rank))) {
      setError('Please enter a valid JEE Rank')
      return
    }

    setLoading(true)
    setError('')
    
    try {
      const response = await fetch(`/api/predict?rank=${rank}`)
      
      if (response.ok) {
        const data = await response.json()
        setResults(data)
      } else {
        const errorData = await response.json()
        setError(errorData.error || 'An error occurred')
      }
    } catch (error) {
      console.error('Error predicting colleges:', error)
      setError('An error occurred while predicting colleges')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        JEE College Predictor
      </h1>
      
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enter your JEE Rank <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-4">
          <input
            type="number"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your JEE Rank"
            value={rank}
            onChange={(e) => setRank(e.target.value)}
          />
          <button
            onClick={predict}
            disabled={loading || !rank}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2 px-8 rounded-md transition-colors duration-200"
          >
            {loading ? 'Predicting...' : 'Predict'}
          </button>
        </div>
        {error && (
          <p className="mt-2 text-red-500 text-sm">{error}</p>
        )}
      </div>

      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600">Loading predictions...</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Prediction Results ({results.length} colleges found)
          </h2>
          <div className="grid gap-4">
            {results.map((result, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {result.institute || 'Unknown Institute'}
                    </h3>
                    <p className="text-lg text-gray-600 mb-1">
                      {result.academicProgram || 'Program not specified'}
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {result.instituteType || 'N/A'}
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                        {result.seatType || 'N/A'}
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
                        {result.gender || 'N/A'}
                      </span>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">
                        {result.quota || 'N/A'}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">Rank Range</div>
                    <div className="text-lg font-semibold text-gray-800">
                      {result.openingRank || 'N/A'} - {result.closingRank || 'N/A'}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Year: {result.year?.toString() || 'N/A'} | Round: {result.round?.toString() || 'N/A'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!loading && results.length === 0 && rank && !error && (
        <div className="text-center py-8">
          <p className="text-gray-600">No colleges found for rank {rank}. Try a different rank.</p>
        </div>
      )}
    </div>
  )
}
