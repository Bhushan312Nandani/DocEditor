import { X, Clock, RotateCcw, Download, GitBranch, FileText } from 'lucide-react';

export function HistoryPanel() {
  const documentHistory = [
    {
      id: 1,
      timestamp: '2 minutes ago',
      description: 'Added conclusion paragraph',
      wordCount: 325,
      changes: '+45 words',
      author: 'You',
      isCurrent: true
    },
    {
      id: 2,
      timestamp: '15 minutes ago',
      description: 'Revised introduction',
      wordCount: 280,
      changes: '+12 words, -5 words',
      author: 'You',
      isCurrent: false
    },
    {
      id: 3,
      timestamp: '1 hour ago',
      description: 'Fixed grammar issues',
      wordCount: 273,
      changes: '3 edits',
      author: 'You',
      isCurrent: false
    },
    {
      id: 4,
      timestamp: '2 hours ago',
      description: 'Initial draft created',
      wordCount: 250,
      changes: 'Created',
      author: 'You',
      isCurrent: false
    },
    {
      id: 5,
      timestamp: 'Yesterday at 3:45 PM',
      description: 'Research notes',
      wordCount: 150,
      changes: 'Draft',
      author: 'You',
      isCurrent: false
    }
  ];

  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock size={20} />
          <h2 className="font-semibold">Document History</h2>
        </div>
        <button className="hover:bg-blue-700 p-1 rounded">
          <X size={20} />
        </button>
      </div>

      {/* Current Document Info */}
      <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 border-b border-gray-200">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileText size={20} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm truncate">The Goliath of the Sea</h3>
            <p className="text-xs text-gray-600 mt-1">Last saved: 2 minutes ago</p>
            <div className="flex items-center gap-3 mt-2 text-xs text-gray-600">
              <span>325 words</span>
              <span>•</span>
              <span>5 versions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-save Status */}
      <div className="px-4 py-3 bg-green-50 border-b border-green-200 flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-xs text-green-800 font-medium">Auto-save enabled</span>
      </div>

      {/* Version History */}
      <div className="flex-1 overflow-auto">
        <div className="p-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">Version History</h3>
          
          <div className="space-y-1">
            {documentHistory.map((version) => (
              <div 
                key={version.id}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  version.isCurrent 
                    ? 'bg-blue-100 border border-blue-300' 
                    : 'hover:bg-gray-50 border border-transparent'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{version.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock size={12} className="text-gray-400" />
                      <span className="text-xs text-gray-500">{version.timestamp}</span>
                    </div>
                  </div>
                  {version.isCurrent && (
                    <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full font-medium flex-shrink-0">
                      Current
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between mt-2 text-xs">
                  <span className="text-gray-600">{version.wordCount} words</span>
                  <span className="text-blue-600 font-medium">{version.changes}</span>
                </div>

                {!version.isCurrent && (
                  <div className="flex gap-2 mt-2">
                    <button className="flex-1 px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 flex items-center justify-center gap-1">
                      <RotateCcw size={12} />
                      Restore
                    </button>
                    <button className="px-2 py-1 border border-gray-300 rounded text-xs hover:bg-gray-50">
                      <Download size={12} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Version Control Actions */}
      <div className="p-4 border-t border-gray-200 space-y-2">
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium flex items-center justify-center gap-2">
          <GitBranch size={16} />
          Create Checkpoint
        </button>
        <button className="w-full px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium">
          Compare Versions
        </button>
        <button className="w-full px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium flex items-center justify-center gap-2">
          <Download size={16} />
          Export All Versions
        </button>
      </div>
    </div>
  );
}
