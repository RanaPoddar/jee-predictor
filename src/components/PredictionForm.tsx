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
  year: number | null;
  round: number | null;
}

export default function PredictionForm() {
  const [rank, setRank] = useState('')
  const [year, setYear] = useState('')
  const [round, setRound] = useState('')
  const [instituteType, setInstituteType] = useState('')
  const [seatType, setSeatType] = useState('')
  const [gender, setGender] = useState('')
  const [quota, setQuota] = useState('')
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
      const params = new URLSearchParams({
        rank,
        ...(year && { year }),
        ...(round && { round }),
        ...(instituteType && { instituteType }),
        ...(seatType && { seatType }),
        ...(gender && { gender }),
        ...(quota && { quota })
      })

      const response = await fetch(`/api/predict?${params}`)
      
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

  // Helper function to get institute type styling based on priority
  const getInstituteTypeStyle = (instituteType: string | null) => {
    switch (instituteType) {
      case 'IIT':
        return 'bg-red-100 text-red-800 border border-red-200 font-semibold';
      case 'NIT':
        return 'bg-orange-100 text-orange-800 border border-orange-200 font-semibold';
      case 'IIIT':
        return 'bg-yellow-100 text-yellow-800 border border-yellow-200 font-semibold';
      case 'GFTI':
        return 'bg-blue-100 text-blue-800 border border-blue-200 font-semibold';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  }

  // Helper function to get priority badge
  const getPriorityBadge = (instituteType: string | null) => {
    switch (instituteType) {
      case 'IIT':
        return <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">HIGHEST PRIORITY</span>;
      case 'NIT':
        return <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">HIGH PRIORITY</span>;
      case 'IIIT':
        return <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">MEDIUM PRIORITY</span>;
      case 'GFTI':
        return <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">GOOD PRIORITY</span>;
      default:
        return null;
    }
  }

  // Helper function to format round display
  const formatRound = (round: number | null) => {
    if (!round) return 'N/A';
    switch (round) {
      case 7:
        return 'CSAB 1';
      case 8:
        return 'CSAB 2';
      default:
        return `Round ${round}`;
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        JEE College Predictor
      </h1>
      
      <div className="mb-8">
        {/* Rank Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter your JEE Rank <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your JEE Rank"
            value={rank}
            onChange={(e) => setRank(e.target.value)}
          />
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Year
            </label>
            <select
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="">All Years</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Round
            </label>
            <select
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={round}
              defaultValue={'6'}
              onChange={(e) => setRound(e.target.value)}
            >
              <option value="6">Round 6</option>
              <option value="7">CSAB 1</option>
              <option value="8">CSAB 2</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Institute Type
            </label>
            <select
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={instituteType}
              onChange={(e) => setInstituteType(e.target.value)}
            >
              <option value="">All Institute Types</option>
              <option value="IIT">IIT</option>
              <option value="NIT">NIT</option>
              <option value="IIIT">IIIT</option>
              <option value="GFTI">GFTI</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Seat Type
            </label>
            <select
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={seatType}
              onChange={(e) => setSeatType(e.target.value)}
            >
              <option value="">All Seat Types</option>
              <option value="Open">Open</option>
              <option value="EWS">EWS</option>
              <option value="OBC-NCL">OBC-NCL</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="Open (PwD)">Open (PwD)</option>
              <option value="EWS (PwD)">EWS (PwD)</option>
              <option value="OBC-NCL (PwD)">OBC-NCL (PwD)</option>
              <option value="SC (PwD)">SC (PwD)</option>
              <option value="ST (PwD)">ST (PwD)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender
            </label>
            <select
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">All Genders</option>
              <option value="Gender-Neutral">Gender-Neutral</option>
              <option value="Female-only (including Supernumerary)">Female-only</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quota
            </label>
            <select
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={quota}
              onChange={(e) => setQuota(e.target.value)}
            >
              <option value="">All Quotas</option>
              <option value="AI">All India</option>
              <option value="OS">Other State</option>
              <option value="HS">Home State</option>
              <option value="GO">General Other</option>
            </select>
          </div>
        </div>

        {/* Predict Button */}
        <button
          onClick={predict}
          disabled={loading || !rank}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200"
        >
          {loading ? 'Predicting...' : 'Predict Colleges'}
        </button>

        {error && (
          <p className="mt-4 text-red-500 text-sm text-center">{error}</p>
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
            <span className="text-sm font-normal text-gray-500 ml-2">
              (Sorted by priority: IIT → NIT → IIIT → GFTI)
            </span>
          </h2>
          <div className="grid gap-4">
            {results.map((result, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-4 lg:mb-0 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {result.institute || 'Unknown Institute'}
                      </h3>
                      {getPriorityBadge(result.instituteType)}
                    </div>
                    <p className="text-lg text-gray-600 mb-3">
                      {result.academicProgram || 'Program not specified'}
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className={`px-2 py-1 rounded ${getInstituteTypeStyle(result.instituteType)}`}>
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
                  <div className="lg:text-right lg:ml-6">
                    <div className="text-sm text-gray-500 mb-1">Rank Range</div>
                    <div className="text-lg font-semibold text-gray-800">
                      {result.openingRank || 'N/A'} - {result.closingRank || 'N/A'}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Year: {result.year?.toString() || 'N/A'} | Round: {formatRound(result.round)}
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
          <p className="text-gray-600">
            No colleges found matching your criteria. Try adjusting your filters or rank.
          </p>
        </div>
      )}
    </div>
  )
}