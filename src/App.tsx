import { useState } from 'react';
import { DocumentEditor } from './components/DocumentEditor';
import { Toolbar } from './components/Toolbar';
import { Sidebar } from './components/Sidebar';
import { PlagiarismPanel } from './components/PlagiarismPanel';
import { AIDetectionPanel } from './components/AIDetectionPanel';
import { HistoryPanel } from './components/HistoryPanel';
import { ReadabilityStats } from './components/ReadabilityStats';
import { ChatbotAssistant } from './components/ChatbotAssistant';
import { RecommendationPanel } from './components/RecommendationPanel';
import { AlertCircle } from 'lucide-react';

export default function App() {
  const [activeTool, setActiveTool] = useState<'plagiarism' | 'ai' | 'history' | 'chatbot' | null>('chatbot');
  const [documentContent, setDocumentContent] = useState(`The Goliath of the Sea

The majestic blue whale, the goliath of the sea, certainly stands alone within the animal kingdom for its adaptations beyond its massive size.

At 30 metres (98 ft) in length and 190 tonnes (210 short tons) or more in weight, it is the largest existing animal and the heaviest that has ever existed. Despite their incomparable mass, aggressive hunting in the 1900s by whalers seeking whale oil drove them to the brink of extinction. But there are other reasons for why they are now so endangered.

The blue whale's common name derives from bluish-hue that covers the upper side of it body, while its Latin designation is Balaenoptera musculus. The blue whale belongs to the Mysteceti suborder of cetaceans, also known as baleen whales, which means they have fringed plates of fingernail-like material, called baleen, attached to their upper jaws. Blue whales feed almost exclusively on krill, though they also take small numbers of copepods. An adult blue whale can eat up to 40 million krill in a day.`);
  const [documentTitle, setDocumentTitle] = useState('The Goliath of the Sea');
  const [wordCount, setWordCount] = useState(325);
  const [score, setScore] = useState(75);
  const [showReadabilityStats, setShowReadabilityStats] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Top Header */}
      <header className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-blue-600 font-semibold">EditPro Studio</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <input 
            type="text" 
            value={documentTitle}
            onChange={(e) => setDocumentTitle(e.target.value)}
            className="text-center px-4 py-1 border border-gray-300 rounded"
          />
          <div 
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-3 py-1 rounded"
            onClick={() => setShowReadabilityStats(!showReadabilityStats)}
          >
            <span className="text-3xl font-bold">{score}</span>
            <span className="text-gray-500">/100</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowRecommendations(true)}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors animate-pulse"
          >
            <AlertCircle size={18} />
            <span className="font-semibold">2 Critical Issues</span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2"/>
              <path d="M12 16V12M12 8H12.01" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Alert Banner */}
      <div className="bg-red-50 border-b border-red-200 px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertCircle size={18} className="text-red-600" />
          <span className="text-sm text-red-800">
            <strong>Document Not Ready:</strong> High plagiarism (43%) and missing conclusion detected
          </span>
        </div>
        <button 
          onClick={() => setShowRecommendations(true)}
          className="text-sm text-red-700 hover:text-red-900 underline font-semibold"
        >
          View Recommendations
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar activeTool={activeTool} setActiveTool={setActiveTool} />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col relative">
          <Toolbar />
          <DocumentEditor 
            content={documentContent} 
            setContent={setDocumentContent}
            setWordCount={setWordCount}
          />
          
          {/* Readability Stats Overlay */}
          {showReadabilityStats && (
            <ReadabilityStats onClose={() => setShowReadabilityStats(false)} />
          )}

          {/* Recommendations Overlay */}
          {showRecommendations && (
            <div onClick={() => setShowRecommendations(false)}>
              <RecommendationPanel />
            </div>
          )}
          
          {/* Footer */}
          <div className="px-6 py-2 border-t border-gray-200 flex items-center justify-between bg-gray-50">
            <span className="text-sm text-gray-600">Page: 1 of 2</span>
            <span className="text-sm text-gray-600">Word count: {wordCount}</span>
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-gray-200 rounded">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21L16.65 16.65"/>
                </svg>
              </button>
              <div className="w-32 h-1 bg-gray-300 rounded">
                <div className="w-2/3 h-full bg-blue-600 rounded"></div>
              </div>
              <button className="p-1 hover:bg-gray-200 rounded">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21L16.65 16.65"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        {activeTool === 'plagiarism' && <PlagiarismPanel />}
        {activeTool === 'ai' && <AIDetectionPanel />}
        {activeTool === 'history' && <HistoryPanel />}
        {activeTool === 'chatbot' && <ChatbotAssistant />}
      </div>
    </div>
  );
}