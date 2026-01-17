import { X, Brain, TrendingUp, AlertTriangle, CheckCircle, Lightbulb, Sparkles } from 'lucide-react';

export function AIDetectionPanel() {
  const aiSuggestions = [
    {
      type: 'clarity',
      title: 'Improve Clarity',
      original: 'Despite their incomparable mass, aggressive hunting in the 1900s...',
      suggestion: 'Despite their enormous size, intensive hunting during the 1900s...',
      icon: Lightbulb,
      color: 'text-yellow-600'
    },
    {
      type: 'tone',
      title: 'Tone Enhancement',
      original: 'But there are other reasons for why they are now so endangered.',
      suggestion: 'However, several additional factors contribute to their endangered status.',
      icon: TrendingUp,
      color: 'text-blue-600'
    },
    {
      type: 'grammar',
      title: 'Grammar Check',
      original: 'Blue whales feed almost exclusively on krill, though they also take small numbers of copepods.',
      suggestion: 'Blue whales feed almost exclusively on krill, although they also consume small quantities of copepods.',
      icon: CheckCircle,
      color: 'text-green-600'
    }
  ];

  return (
    <div className="w-96 bg-white border-l border-gray-200 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain size={20} />
          <h2 className="font-semibold">AI Writing Assistant</h2>
        </div>
        <button className="hover:bg-white/20 p-1 rounded">
          <X size={20} />
        </button>
      </div>

      {/* AI Detection Score */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">AI Content Detection</h3>
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
            Human Written
          </span>
        </div>
        
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Human Content</span>
              <span className="font-semibold">94%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-500" style={{ width: '94%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">AI Generated</span>
              <span className="font-semibold">6%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500" style={{ width: '6%' }}></div>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg flex items-start gap-2">
          <AlertTriangle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-blue-900">
            Minor AI patterns detected in paragraph 2. Consider revising for authenticity.
          </p>
        </div>
      </div>

      {/* Writing Suggestions */}
      <div className="flex-1 overflow-auto">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={18} className="text-purple-600" />
            <h3 className="font-semibold">Writing Suggestions</h3>
            <span className="ml-auto text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
              {aiSuggestions.length} suggestions
            </span>
          </div>

          <div className="space-y-4">
            {aiSuggestions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex items-start gap-2 mb-2">
                    <Icon size={16} className={`${item.color} mt-0.5`} />
                    <span className="text-sm font-semibold">{item.title}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-red-50 border-l-2 border-red-300 p-2 rounded">
                      <p className="text-xs text-gray-700">{item.original}</p>
                    </div>
                    
                    <div className="bg-green-50 border-l-2 border-green-300 p-2 rounded">
                      <p className="text-xs text-gray-700">{item.suggestion}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700">
                      Apply
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-xs hover:bg-gray-50">
                      Ignore
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* AI Actions */}
      <div className="p-4 border-t border-gray-200 space-y-2">
        <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded hover:from-purple-700 hover:to-blue-700 text-sm font-medium flex items-center justify-center gap-2">
          <Sparkles size={16} />
          Generate Paragraph
        </button>
        <button className="w-full px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium">
          Paraphrase Selection
        </button>
        <button className="w-full px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium">
          Expand Content
        </button>
      </div>
    </div>
  );
}
