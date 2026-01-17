import { 
  FileText, 
  Copy, 
  CheckCircle, 
  Edit3, 
  Grid3x3, 
  Wand2, 
  Filter, 
  Ban, 
  Download, 
  Info,
  MessageCircle 
} from 'lucide-react';

interface SidebarProps {
  activeTool: 'plagiarism' | 'ai' | 'history' | 'chatbot' | null;
  setActiveTool: (tool: 'plagiarism' | 'ai' | 'history' | 'chatbot' | null) => void;
}

export function Sidebar({ activeTool, setActiveTool }: SidebarProps) {
  return (
    <div className="w-14 bg-gray-800 flex flex-col items-center py-4 gap-2">
      <button 
        className="p-3 text-white hover:bg-gray-700 rounded transition-colors"
        title="Files"
      >
        <FileText size={20} />
      </button>
      
      <button 
        className={`p-3 rounded transition-colors relative ${
          activeTool === 'plagiarism' 
            ? 'bg-red-600 text-white' 
            : 'text-white hover:bg-gray-700'
        }`}
        onClick={() => setActiveTool(activeTool === 'plagiarism' ? null : 'plagiarism')}
        title="Plagiarism Checker"
      >
        <Copy size={20} />
        {activeTool !== 'plagiarism' && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold">
            43
          </div>
        )}
      </button>
      
      <button 
        className={`p-3 rounded transition-colors ${
          activeTool === 'ai' 
            ? 'bg-blue-600 text-white' 
            : 'text-white hover:bg-gray-700'
        }`}
        onClick={() => setActiveTool(activeTool === 'ai' ? null : 'ai')}
        title="AI Detection"
      >
        <CheckCircle size={20} />
      </button>

      <button 
        className={`p-3 rounded transition-colors relative ${
          activeTool === 'chatbot' 
            ? 'bg-purple-600 text-white' 
            : 'text-white hover:bg-gray-700'
        }`}
        onClick={() => setActiveTool(activeTool === 'chatbot' ? null : 'chatbot')}
        title="AI Writing Assistant"
      >
        <MessageCircle size={20} />
        <div className="absolute top-1 right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      </button>
      
      <button 
        className="p-3 text-white hover:bg-gray-700 rounded transition-colors"
        title="Grammar Check"
      >
        <Edit3 size={20} />
      </button>
      
      <button 
        className="p-3 text-white hover:bg-gray-700 rounded transition-colors"
        title="Citations"
      >
        <Grid3x3 size={20} />
      </button>
      
      <button 
        className="p-3 text-white hover:bg-gray-700 rounded transition-colors"
        title="AI Generation"
      >
        <Wand2 size={20} />
      </button>
      
      <button 
        className="p-3 text-white hover:bg-gray-700 rounded transition-colors"
        title="Tone Analyzer"
      >
        <Filter size={20} />
      </button>
      
      <button 
        className="p-3 text-white hover:bg-gray-700 rounded transition-colors"
        title="Block Distractions"
      >
        <Ban size={20} />
      </button>
      
      <div className="flex-1"></div>
      
      <button 
        className="p-3 text-white hover:bg-gray-700 rounded transition-colors"
        title="Download"
      >
        <Download size={20} />
      </button>
      
      <button 
        className={`p-3 rounded transition-colors ${
          activeTool === 'history' 
            ? 'bg-blue-600 text-white' 
            : 'text-white hover:bg-gray-700'
        }`}
        onClick={() => setActiveTool(activeTool === 'history' ? null : 'history')}
        title="Document History"
      >
        <Info size={20} />
      </button>
    </div>
  );
}