import { AlertCircle, CheckCircle2, Copy, Sparkles } from 'lucide-react';

interface GrammarTooltipProps {
  type: 'grammar' | 'plagiarism' | 'style' | 'ai';
  message: string;
  suggestion: string;
}

export function GrammarTooltip({ type, message, suggestion }: GrammarTooltipProps) {
  const getColor = () => {
    switch (type) {
      case 'grammar': return 'border-yellow-400 bg-yellow-50';
      case 'plagiarism': return 'border-red-400 bg-red-50';
      case 'style': return 'border-blue-400 bg-blue-50';
      case 'ai': return 'border-purple-400 bg-purple-50';
      default: return 'border-gray-400 bg-gray-50';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'grammar': return <AlertCircle size={16} className="text-yellow-600" />;
      case 'plagiarism': return <Copy size={16} className="text-red-600" />;
      case 'style': return <CheckCircle2 size={16} className="text-blue-600" />;
      case 'ai': return <Sparkles size={16} className="text-purple-600" />;
    }
  };

  return (
    <div className={`absolute left-6 top-0 w-64 ${getColor()} border-2 rounded-lg p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50`}>
      <div className="flex items-start gap-2 mb-2">
        {getIcon()}
        <p className="text-xs font-medium text-gray-800">{message}</p>
      </div>
      
      {suggestion && (
        <div className="mt-2 p-2 bg-white rounded border border-gray-200">
          <p className="text-xs text-gray-700 font-medium mb-1">Suggestion:</p>
          <p className="text-xs text-gray-900">{suggestion}</p>
        </div>
      )}
      
      <div className="flex gap-2 mt-3">
        <button className="flex-1 px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700">
          Apply
        </button>
        <button className="px-2 py-1 border border-gray-300 bg-white rounded text-xs hover:bg-gray-50">
          Ignore
        </button>
      </div>
    </div>
  );
}
