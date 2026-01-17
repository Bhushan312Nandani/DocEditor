import { CheckCircle, XCircle, AlertTriangle, Lightbulb, Target, FileCheck } from 'lucide-react';

export function RecommendationPanel() {
  const recommendations = [
    {
      category: 'Critical Issues',
      icon: XCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      items: [
        {
          issue: 'High Plagiarism Detected (43%)',
          description: 'Multiple sections match online sources. This WILL cause visa application rejection.',
          action: 'Rewrite highlighted sections in your own words',
          priority: 'URGENT'
        },
        {
          issue: 'Missing Conclusion',
          description: 'Your document ends abruptly without a proper closing statement.',
          action: 'Add a conclusion paragraph summarizing your main points',
          priority: 'URGENT'
        }
      ]
    },
    {
      category: 'Grammar & Style',
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      items: [
        {
          issue: 'Informal Language',
          description: '"But there are other reasons" - starts with informal conjunction',
          action: 'Change to "However, several additional factors..."',
          priority: 'HIGH'
        },
        {
          issue: 'Grammar Error',
          description: '"it body" should be "its body"',
          action: 'Fix possessive pronoun error',
          priority: 'HIGH'
        },
        {
          issue: 'Passive Voice Overuse',
          description: '8% of sentences use passive voice',
          action: 'Convert to active voice for clarity',
          priority: 'MEDIUM'
        }
      ]
    },
    {
      category: 'Content Enhancement',
      icon: Lightbulb,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      items: [
        {
          issue: 'Missing Personal Statement',
          description: 'For visa applications, you need to explain WHY this matters to you',
          action: 'Add personal connection to the topic',
          priority: 'HIGH'
        },
        {
          issue: 'No Supporting Arguments',
          description: 'Claims lack evidence or supporting details',
          action: 'Add examples or data to support your statements',
          priority: 'MEDIUM'
        },
        {
          issue: 'Weak Introduction',
          description: 'Introduction could be more engaging and purposeful',
          action: 'Revise opening to clearly state your purpose',
          priority: 'MEDIUM'
        }
      ]
    },
    {
      category: 'Structure & Format',
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      items: [
        {
          issue: 'Missing Subheadings',
          description: 'Long text blocks are hard to read',
          action: 'Add descriptive subheadings for each section',
          priority: 'LOW'
        },
        {
          issue: 'No Citations',
          description: 'Data and facts require proper citations',
          action: 'Add references in proper format',
          priority: 'MEDIUM'
        }
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'URGENT': return 'bg-red-600 text-white';
      case 'HIGH': return 'bg-orange-500 text-white';
      case 'MEDIUM': return 'bg-yellow-500 text-white';
      case 'LOW': return 'bg-blue-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4">
          <div className="flex items-center gap-3">
            <FileCheck size={28} />
            <div>
              <h2 className="text-2xl font-bold">Document Recommendations</h2>
              <p className="text-sm opacity-90">AI-powered analysis for visa-ready documents</p>
            </div>
          </div>
        </div>

        {/* Overall Status */}
        <div className="px-6 py-4 bg-red-50 border-b border-red-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <XCircle size={28} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-red-900">Document Not Ready for Submission</h3>
                <p className="text-sm text-red-700">2 critical issues must be fixed immediately</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-red-600">43%</div>
              <div className="text-xs text-red-700">Similarity Score</div>
            </div>
          </div>
        </div>

        {/* Recommendations List */}
        <div className="flex-1 overflow-auto p-6 space-y-6">
          {recommendations.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <div key={catIndex}>
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={20} className={category.color} />
                  <h3 className="font-bold text-lg text-gray-800">{category.category}</h3>
                  <span className="ml-auto text-sm text-gray-500">
                    {category.items.length} {category.items.length === 1 ? 'issue' : 'issues'}
                  </span>
                </div>

                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`border-2 ${category.borderColor} ${category.bgColor} rounded-lg p-4`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{item.issue}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full font-bold ${getPriorityColor(item.priority)}`}>
                          {item.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{item.description}</p>
                      <div className="flex items-start gap-2 bg-white border border-gray-200 rounded p-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-gray-700 mb-1">Recommended Action:</p>
                          <p className="text-sm text-gray-900">{item.action}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex gap-3">
            <button className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 font-semibold transition-all shadow-md">
              Fix All Issues Automatically
            </button>
            <button className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-100 font-semibold transition-all">
              Export Report
            </button>
            <button className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-100 font-semibold transition-all">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
