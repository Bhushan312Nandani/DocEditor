import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export function PlagiarismPanel() {
  const plagiarismMatches = [
    { 
      source: 'en.wikipedia.org', 
      type: 'Internet Source',
      percentage: 17,
      color: 'bg-red-500',
      matchedText: 'At 30 metres (98 ft) in length and 190 tonnes (210 short tons) or more in weight, it is the largest existing animal and the heaviest that has ever existed.',
      url: 'https://en.wikipedia.org/wiki/Blue_whale'
    },
    { 
      source: 'animals.nationalgeographic.com', 
      type: 'Internet Source',
      percentage: 14,
      color: 'bg-orange-500',
      matchedText: 'aggressive hunting in the 1900s by whalers seeking whale oil drove them to the brink of extinction',
      url: 'https://nationalgeographic.com/animals/mammals/blue-whale'
    },
    { 
      source: 'www.marinebio.org', 
      type: 'Internet Source',
      percentage: 12,
      color: 'bg-yellow-500',
      matchedText: 'The blue whale belongs to the Mysteceti suborder of cetaceans, also known as baleen whales',
      url: 'https://marinebio.org/species/blue-whales'
    }
  ];

  return (
    <div className="w-96 bg-white border-l border-gray-200 flex flex-col">
      {/* Header */}
      <div className="bg-red-600 text-white px-4 py-3 flex items-center justify-between">
        <h2 className="font-semibold">Similarity Report</h2>
        <button className="hover:bg-red-700 p-1 rounded">
          <X size={20} />
        </button>
      </div>

      {/* Overall Score */}
      <div className="p-6 text-center border-b border-gray-200 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="text-7xl font-bold text-red-600 mb-2">43%</div>
        <div className="text-sm text-red-800 font-semibold mb-1">SIMILARITY INDEX</div>
        <div className="mt-3 flex items-center justify-between text-sm">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronLeft size={16} />
          </button>
          <span className="text-gray-700 font-medium">3 sources matched</span>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronRight size={16} />
          </button>
        </div>
        
        {/* Breakdown */}
        <div className="mt-4 p-3 bg-white rounded-lg border border-red-200">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-gray-600">Internet Sources:</span>
            <span className="font-bold text-red-600">43%</span>
          </div>
          <div className="flex justify-between text-xs mb-2">
            <span className="text-gray-600">Publications:</span>
            <span className="font-bold text-gray-600">0%</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">Student Papers:</span>
            <span className="font-bold text-gray-600">0%</span>
          </div>
        </div>
      </div>

      {/* Match List */}
      <div className="flex-1 overflow-auto">
        <div className="p-3 bg-gray-50 border-b border-gray-200">
          <h3 className="text-xs font-bold text-gray-700 uppercase">Sources by Similarity:</h3>
        </div>
        
        {plagiarismMatches.map((match, index) => (
          <div 
            key={index}
            className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 ${match.color} rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md`}>
                {match.percentage}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">
                      Source #{index + 1}
                    </h3>
                    <p className="text-xs text-blue-600 truncate hover:underline">
                      {match.source}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{match.type}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <ExternalLink size={14} className="text-gray-400" />
                  </div>
                </div>
                
                {/* Matched Text Preview */}
                <div className="mt-2 p-2 bg-red-50 border-l-2 border-red-400 rounded text-xs">
                  <p className="text-gray-700 line-clamp-2">{match.matchedText}</p>
                </div>

                {/* Percentage Bar */}
                <div className="mt-2">
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${match.color}`}
                      style={{ width: `${match.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Highlighted Text Preview */}
      <div className="p-4 bg-red-50 border-t-2 border-red-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-red-900 uppercase">Active Match:</h3>
          <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full font-bold">17%</span>
        </div>
        <div className="text-xs text-gray-700 leading-relaxed mb-2">
          <span className="bg-red-200 px-1 py-0.5 border-l-2 border-red-500">At 30 metres (98 ft) in length and 190 tonnes (210 short tons) or more in weight, it is the largest existing animal and the heaviest that has ever existed.</span>
        </div>
        <button className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-semibold">
          <ExternalLink size={12} />
          View on Wikipedia
        </button>
      </div>

      {/* Action Buttons */}
      <div className="p-4 border-t border-gray-200 space-y-2 bg-white">
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-semibold shadow-sm">
          Paraphrase Selection
        </button>
        <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm font-semibold shadow-sm">
          Add Citation
        </button>
        <button className="w-full px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium">
          Download Full Report
        </button>
      </div>
    </div>
  );
}