import { X, Sparkles, FileText, ListChecks, Lightbulb, MessageSquare } from 'lucide-react';
import { useState } from 'react';

interface AutoGenerateModalProps {
  onClose: () => void;
}

export function AutoGenerateModal({ onClose }: AutoGenerateModalProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [tone, setTone] = useState('professional');

  const generateOptions = [
    {
      id: 'paragraph',
      icon: FileText,
      title: 'Generate Paragraph',
      description: 'Create a new paragraph based on your topic',
      color: 'bg-blue-500'
    },
    {
      id: 'outline',
      icon: ListChecks,
      title: 'Create Outline',
      description: 'Generate a structured outline for your document',
      color: 'bg-green-500'
    },
    {
      id: 'ideas',
      icon: Lightbulb,
      title: 'Brainstorm Ideas',
      description: 'Get creative ideas and suggestions',
      color: 'bg-yellow-500'
    },
    {
      id: 'conclusion',
      icon: MessageSquare,
      title: 'Write Conclusion',
      description: 'Generate a conclusion based on your content',
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 flex items-center justify-between rounded-t-xl">
          <div className="flex items-center gap-3">
            <Sparkles size={24} />
            <h2 className="text-xl font-semibold">AI Content Generator</h2>
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
          <p className="text-gray-600 mb-6">
            Choose what you'd like to generate, and our AI will help you create high-quality content instantly.
          </p>

          {/* Generation Options */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {generateOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`p-4 border-2 rounded-lg text-left transition-all hover:shadow-md ${
                    selectedOption === option.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className={`w-10 h-10 ${option.color} rounded-lg flex items-center justify-center mb-3`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">{option.title}</h3>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </button>
              );
            })}
          </div>

          {/* Input Section */}
          {selectedOption && (
            <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What should we write about?
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="E.g., The importance of marine conservation and protecting endangered species..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tone
                  </label>
                  <select 
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="professional">Professional</option>
                    <option value="casual">Casual</option>
                    <option value="academic">Academic</option>
                    <option value="creative">Creative</option>
                    <option value="persuasive">Persuasive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Length
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="short">Short (50-100 words)</option>
                    <option value="medium">Medium (100-200 words)</option>
                    <option value="long">Long (200-400 words)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              disabled={!selectedOption || !prompt}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Sparkles size={18} />
              Generate Content
            </button>
          </div>

          {/* Info Banner */}
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-xs text-blue-900">
              💡 <strong>Tip:</strong> Be specific in your prompt for better results. The AI will generate unique content that you can edit and customize.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
