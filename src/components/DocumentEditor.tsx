import { useEffect, useRef, useState } from 'react';
import { GrammarTooltip } from './GrammarTooltip';
import { AutoGenerateModal } from './AutoGenerateModal';

interface DocumentEditorProps {
  content: string;
  setContent: (content: string) => void;
  setWordCount: (count: number) => void;
}

export function DocumentEditor({ content, setContent, setWordCount }: DocumentEditorProps) {
  const [showGenerateModal, setShowGenerateModal] = useState(false);

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setContent(text);
    
    // Calculate word count
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  };

  // Simulate highlighted text with different colors for different issues
  const renderHighlightedContent = () => {
    const sections = [
      { text: "The Goliath of the Sea\n\n", highlight: null },
      { text: "The majestic blue whale, ", highlight: null },
      { text: "the goliath of the sea", highlight: "blue" },
      { text: ", certainly stands alone within the animal kingdom for its adaptations beyond its massive size.\n\n", highlight: null },
      { text: "At 30 metres (98 ft) in length and 190 tonnes (210 short tons) or more in weight, it is the largest existing animal and the heaviest that has ever existed.", highlight: "red" },
      { text: " Despite their incomparable mass, ", highlight: null },
      { text: "aggressive hunting in the 1900s by whalers seeking whale oil drove them to the brink of extinction", highlight: "orange" },
      { text: ". ", highlight: null },
      { text: "But there are other reasons for why they are now so endangered.", highlight: "yellow" },
      { text: "\n\nThe blue whale's common name derives from ", highlight: null },
      { text: "bluish-hue that covers the upper side of it body", highlight: "green" },
      { text: ", while its Latin designation is ", highlight: null },
      { text: "Balaenoptera musculus", highlight: "blue" },
      { text: ". The blue whale belongs to the Mysteceti suborder of cetaceans, also known as baleen whales, which means they have fringed plates of fingernail-like material, called baleen, attached to their upper jaws.", highlight: "orange" },
      { text: " Blue whales feed almost exclusively on krill, though they also take small numbers of copepods. An adult blue whale can eat up to 40 million krill in a day.", highlight: null }
    ];

    return sections.map((section, index) => {
      if (!section.highlight) {
        return <span key={index}>{section.text}</span>;
      }

      const colors: Record<string, string> = {
        red: 'bg-red-200 border-b-2 border-red-500',
        orange: 'bg-orange-200 border-b-2 border-orange-500',
        yellow: 'bg-yellow-200 border-b-2 border-yellow-500',
        green: 'bg-green-200 border-b-2 border-green-500',
        blue: 'bg-blue-200 border-b-2 border-blue-500'
      };

      return (
        <mark 
          key={index} 
          className={`${colors[section.highlight]} cursor-pointer hover:opacity-80 transition-opacity`}
          title="Click to see details"
        >
          {section.text}
        </mark>
      );
    });
  };

  return (
    <div className="flex-1 overflow-auto bg-gray-50 px-8 py-6 relative">
      <div className="max-w-4xl mx-auto bg-white shadow-lg min-h-full relative">
        {/* Real-time feature indicators */}
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Real-time checking
          </div>
          <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
            Auto-save: ON
          </div>
        </div>

        {/* Color Legend */}
        <div className="absolute top-14 right-4 bg-white border border-gray-200 rounded-lg p-3 shadow-md text-xs z-10">
          <div className="font-semibold mb-2">Detection Legend:</div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 bg-red-200 border-b-2 border-red-500 rounded-sm"></div>
              <span>High similarity (17%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 bg-orange-200 border-b-2 border-orange-500 rounded-sm"></div>
              <span>Medium similarity (14%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 bg-yellow-200 border-b-2 border-yellow-500 rounded-sm"></div>
              <span>Grammar issue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 bg-green-200 border-b-2 border-green-500 rounded-sm"></div>
              <span>Style suggestion</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 bg-blue-200 border-b-2 border-blue-500 rounded-sm"></div>
              <span>Technical term</span>
            </div>
          </div>
        </div>

        {/* Document with inline highlights like Turnitin */}
        <div 
          className="px-16 py-12 outline-none leading-loose text-gray-900"
          style={{ minHeight: '11in', fontSize: '16px', fontFamily: 'Times New Roman, serif' }}
        >
          {renderHighlightedContent()}
        </div>
      </div>

      {/* Quick Actions Floating Bar */}
      <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-white shadow-2xl rounded-full px-6 py-3 border border-gray-200 flex items-center gap-4 z-20">
        <button 
          onClick={() => setShowGenerateModal(true)}
          className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm hover:bg-purple-700 transition-colors font-medium"
        >
          ✨ Generate Content
        </button>
        <div className="w-px h-6 bg-gray-300"></div>
        <button className="px-4 py-2 text-sm hover:bg-gray-100 rounded-full transition-colors font-medium">
          📝 Paraphrase
        </button>
        <button className="px-4 py-2 text-sm hover:bg-gray-100 rounded-full transition-colors font-medium">
          🔍 Check All
        </button>
        <button className="px-4 py-2 text-sm hover:bg-gray-100 rounded-full transition-colors font-medium">
          📚 Add Citation
        </button>
      </div>

      {showGenerateModal && (
        <AutoGenerateModal onClose={() => setShowGenerateModal(false)} />
      )}
    </div>
  );
}