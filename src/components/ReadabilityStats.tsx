import { X, BookOpen, Target, TrendingUp, Clock, GraduationCap, Eye } from 'lucide-react';

interface ReadabilityStatsProps {
  onClose: () => void;
}

export function ReadabilityStats({ onClose }: ReadabilityStatsProps) {
  return (
    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-start justify-center pt-16 z-40">
      <div className="bg-white rounded-xl shadow-2xl w-[500px] max-h-[80vh] overflow-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 flex items-center justify-between rounded-t-xl">
          <div className="flex items-center gap-3">
            <BookOpen size={24} />
            <h2 className="text-xl font-semibold">Document Analysis</h2>
          </div>
          <button 
            onClick={onClose}
            className="hover:bg-white/20 p-2 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Overall Score */}
          <div className="text-center mb-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
            <div className="text-6xl font-bold text-blue-600 mb-2">75</div>
            <p className="text-gray-700 font-medium">Overall Score</p>
            <p className="text-sm text-gray-600 mt-1">Good - Room for improvement</p>
          </div>

          {/* Detailed Metrics */}
          <div className="space-y-4">
            {/* Readability */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Eye size={18} className="text-green-600" />
                  <span className="font-semibold">Readability</span>
                </div>
                <span className="text-green-600 font-bold">82/100</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-green-500" style={{ width: '82%' }}></div>
              </div>
              <p className="text-xs text-gray-600">
                Flesch Reading Ease: 65 (Standard - easily understood by 13-15 year olds)
              </p>
            </div>

            {/* Grade Level */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-blue-600" />
                  <span className="font-semibold">Grade Level</span>
                </div>
                <span className="text-blue-600 font-bold">Grade 10</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-blue-500" style={{ width: '70%' }}></div>
              </div>
              <p className="text-xs text-gray-600">
                Flesch-Kincaid Grade Level: 10.2
              </p>
            </div>

            {/* Clarity */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Target size={18} className="text-purple-600" />
                  <span className="font-semibold">Clarity Score</span>
                </div>
                <span className="text-purple-600 font-bold">78/100</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-purple-500" style={{ width: '78%' }}></div>
              </div>
              <p className="text-xs text-gray-600">
                Sentences are mostly clear with some complex structures
              </p>
            </div>

            {/* Reading Time */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-orange-600" />
                  <span className="font-semibold">Reading Time</span>
                </div>
                <span className="text-orange-600 font-bold">1.5 min</span>
              </div>
              <p className="text-xs text-gray-600">
                Average reading speed: ~200 words/minute
              </p>
            </div>

            {/* Engagement */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <TrendingUp size={18} className="text-yellow-600" />
                  <span className="font-semibold">Engagement</span>
                </div>
                <span className="text-yellow-600 font-bold">70/100</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-yellow-500" style={{ width: '70%' }}></div>
              </div>
              <p className="text-xs text-gray-600">
                Good use of descriptive language and varied sentence structure
              </p>
            </div>
          </div>

          {/* Writing Stats */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-3 text-sm">Writing Statistics</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Sentences:</span>
                <span className="ml-2 font-semibold">12</span>
              </div>
              <div>
                <span className="text-gray-600">Paragraphs:</span>
                <span className="ml-2 font-semibold">3</span>
              </div>
              <div>
                <span className="text-gray-600">Avg. Sentence Length:</span>
                <span className="ml-2 font-semibold">27 words</span>
              </div>
              <div>
                <span className="text-gray-600">Passive Voice:</span>
                <span className="ml-2 font-semibold">8%</span>
              </div>
              <div>
                <span className="text-gray-600">Adverbs:</span>
                <span className="ml-2 font-semibold">3</span>
              </div>
              <div>
                <span className="text-gray-600">Complex Words:</span>
                <span className="ml-2 font-semibold">15%</span>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold mb-2 text-sm text-blue-900">💡 Recommendations</h3>
            <ul className="text-xs text-blue-900 space-y-1">
              <li>• Consider breaking down longer sentences for better clarity</li>
              <li>• Use more transitional phrases to improve flow</li>
              <li>• Add subheadings to improve document structure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
