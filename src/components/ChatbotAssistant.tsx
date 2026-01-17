import { X, Send, MessageCircle, Sparkles, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export function ChatbotAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm your professional writing assistant. I specialize in helping you craft perfect documents for visa applications, personal statements, motivation letters, and academic writing. How can I help you today?",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [input, setInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const quickPrompts = [
    { icon: FileText, text: "Review my personal statement", color: "bg-blue-500" },
    { icon: CheckCircle, text: "Check visa requirements", color: "bg-green-500" },
    { icon: Sparkles, text: "Improve motivation letter", color: "bg-purple-500" },
    { icon: AlertCircle, text: "What's missing?", color: "bg-orange-500" }
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsAnalyzing(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        role: 'assistant',
        content: generateResponse(input),
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsAnalyzing(false);
    }, 1500);
  };

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('personal statement') || lowerQuery.includes('review')) {
      return `I've analyzed your document "The Goliath of the Sea". Here's my assessment:

**✅ Strengths:**
- Clear structure with well-organized paragraphs
- Good use of specific data and facts (30 metres, 190 tonnes)
- Engaging opening that captures attention

**⚠️ Areas for Improvement:**
1. **Plagiarism Detected (43%)** - Several sections match online sources. You need to paraphrase or add citations.
2. **Grammar Issues** - "But there are other reasons" should start with "However" for formal writing
3. **Style** - "bluish-hue that covers the upper side of it body" has a grammatical error ("it" should be "its")

**💡 Recommendations:**
- Add proper citations for scientific data
- Rephrase highlighted sections in your own words
- Consider adding a conclusion paragraph

Would you like me to help you rewrite any specific section?`;
    } else if (lowerQuery.includes('visa') || lowerQuery.includes('requirements')) {
      return `For visa applications, your document must meet these **essential requirements**:

**📋 Mandatory Elements:**
1. **Clear Purpose** - State your intentions explicitly
2. **No Plagiarism** - Must be 100% original (currently showing 43% similarity)
3. **Proper Grammar** - No errors (4 issues detected)
4. **Formal Tone** - Professional language throughout
5. **Supporting Evidence** - Include relevant facts and data

**🚨 Current Issues in Your Document:**
- High similarity score (43%) - This will likely cause rejection
- Several grammar errors need correction
- Missing conclusion/closing statement

**Next Steps:**
1. Address all plagiarism issues first
2. Fix grammar errors
3. Add a strong conclusion
4. Ensure formal tone throughout

Would you like specific help with any of these areas?`;
    } else if (lowerQuery.includes('missing') || lowerQuery.includes('what')) {
      return `**Missing Elements in Your Document:**

❌ **Critical Missing:**
1. **Conclusion paragraph** - Your document ends abruptly
2. **Purpose statement** - Why are you writing this?
3. **Personal connection** - How does this relate to you?
4. **Call to action** - What do you want the reader to take away?

❌ **Format Issues:**
5. **References/Citations** - No sources cited for data
6. **Introduction hook** - Could be stronger
7. **Transition sentences** - Between paragraphs

✅ **What You Have:**
- Good factual content
- Clear topic focus
- Specific data points

**Priority Actions:**
1. Add a conclusion (highest priority)
2. Include citations for all data
3. Fix plagiarism issues (43% match detected)
4. Address 4 grammar errors

Would you like me to help you write any of these missing sections?`;
    } else if (lowerQuery.includes('motivation') || lowerQuery.includes('improve')) {
      return `**Professional Writing Enhancement Tips:**

**For Motivation Letters:**
1. **Opening Hook** - Start with why you're passionate (you have: "The majestic blue whale" - good start!)
2. **Show, Don't Tell** - Use specific examples
3. **Personal Connection** - Make it about YOUR journey
4. **Clear Goals** - State what you want to achieve

**Immediate Improvements for Your Text:**

**Before:** "But there are other reasons for why they are now so endangered."
**After:** "However, multiple additional factors contribute to their endangered status, including climate change and ocean pollution."

**Before:** "bluish-hue that covers the upper side of it body"
**After:** "distinctive blue-gray coloration that covers its dorsal surface"

**Tone Analysis:**
- Current: Informative/Academic ✓
- Needed: Add more personal perspective for motivation letters
- Suggestion: Connect the topic to your goals/interests

Would you like me to help rewrite a specific paragraph in a more personal, motivational tone?`;
    }
    
    return `I'm analyzing your request. Based on your document, I can help you with:

- **Plagiarism Reduction** - Your document has 43% similarity
- **Grammar Fixes** - 4 errors detected
- **Style Improvement** - Making it more professional
- **Structure Enhancement** - Adding missing sections
- **Visa Document Guidelines** - Ensuring compliance

Please specify what you'd like help with, or ask me to review specific aspects of your document.`;
  };

  const handleQuickPrompt = (text: string) => {
    setInput(text);
  };

  return (
    <div className="w-96 bg-white border-l border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3">
        <div className="flex items-center gap-2">
          <MessageCircle size={20} />
          <div className="flex-1">
            <h2 className="font-semibold">Writing Assistant</h2>
            <p className="text-xs opacity-90">Professional Document Coach</p>
          </div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 border-b border-gray-200">
        <div className="text-xs font-semibold text-gray-700 mb-2">Quick Actions:</div>
        <div className="grid grid-cols-2 gap-2">
          {quickPrompts.map((prompt, index) => {
            const Icon = prompt.icon;
            return (
              <button
                key={index}
                onClick={() => handleQuickPrompt(prompt.text)}
                className="p-2 bg-white border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-sm transition-all text-left"
              >
                <div className={`w-6 h-6 ${prompt.color} rounded flex items-center justify-center mb-1`}>
                  <Icon size={14} className="text-white" />
                </div>
                <div className="text-xs text-gray-700">{prompt.text}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-lg px-4 py-2 ${
                message.role === 'user'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <div className="text-sm whitespace-pre-line">{message.content}</div>
              <div
                className={`text-xs mt-1 ${
                  message.role === 'user' ? 'text-indigo-200' : 'text-gray-500'
                }`}
              >
                {message.timestamp}
              </div>
            </div>
          </div>
        ))}
        
        {isAnalyzing && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg px-4 py-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-sm text-gray-600">Analyzing...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Document Analysis Summary */}
      <div className="px-4 py-3 bg-yellow-50 border-t border-yellow-200">
        <div className="text-xs font-semibold text-yellow-900 mb-2">⚠️ Document Status:</div>
        <div className="space-y-1 text-xs text-yellow-800">
          <div className="flex justify-between">
            <span>Plagiarism:</span>
            <span className="font-semibold text-red-600">43% - High Risk</span>
          </div>
          <div className="flex justify-between">
            <span>Grammar:</span>
            <span className="font-semibold text-orange-600">4 issues found</span>
          </div>
          <div className="flex justify-between">
            <span>Completeness:</span>
            <span className="font-semibold text-yellow-600">Missing conclusion</span>
          </div>
          <div className="flex justify-between">
            <span>Visa Ready:</span>
            <span className="font-semibold text-red-600">Not Ready</span>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything about your document..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
        <div className="mt-2 text-xs text-gray-500 text-center">
          Expert in visa documents, personal statements & motivation letters
        </div>
      </div>
    </div>
  );
}
