import { 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  List, 
  ListOrdered,
  Link,
  Image,
  Highlighter,
  Type
} from 'lucide-react';

export function Toolbar() {
  return (
    <div className="border-b border-gray-200 px-4 py-2 flex items-center gap-1 bg-white">
      <select className="px-3 py-1 border border-gray-300 rounded text-sm">
        <option>Arial</option>
        <option>Times New Roman</option>
        <option>Courier New</option>
        <option>Georgia</option>
      </select>
      
      <select className="px-3 py-1 border border-gray-300 rounded text-sm ml-2">
        <option>12</option>
        <option>14</option>
        <option>16</option>
        <option>18</option>
      </select>
      
      <div className="w-px h-6 bg-gray-300 mx-2"></div>
      
      <button className="p-2 hover:bg-gray-100 rounded" title="Bold">
        <Bold size={18} />
      </button>
      
      <button className="p-2 hover:bg-gray-100 rounded" title="Italic">
        <Italic size={18} />
      </button>
      
      <button className="p-2 hover:bg-gray-100 rounded" title="Underline">
        <Underline size={18} />
      </button>
      
      <button className="p-2 hover:bg-gray-100 rounded" title="Highlight">
        <Highlighter size={18} />
      </button>
      
      <div className="w-px h-6 bg-gray-300 mx-2"></div>
      
      <button className="p-2 hover:bg-gray-100 rounded" title="Align Left">
        <AlignLeft size={18} />
      </button>
      
      <button className="p-2 hover:bg-gray-100 rounded" title="Align Center">
        <AlignCenter size={18} />
      </button>
      
      <button className="p-2 hover:bg-gray-100 rounded" title="Align Right">
        <AlignRight size={18} />
      </button>
      
      <div className="w-px h-6 bg-gray-300 mx-2"></div>
      
      <button className="p-2 hover:bg-gray-100 rounded" title="Bullet List">
        <List size={18} />
      </button>
      
      <button className="p-2 hover:bg-gray-100 rounded" title="Numbered List">
        <ListOrdered size={18} />
      </button>
      
      <div className="w-px h-6 bg-gray-300 mx-2"></div>
      
      <button className="p-2 hover:bg-gray-100 rounded" title="Insert Link">
        <Link size={18} />
      </button>
      
      <button className="p-2 hover:bg-gray-100 rounded" title="Insert Image">
        <Image size={18} />
      </button>
      
      <div className="flex-1"></div>
      
      <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm flex items-center gap-2">
        <Type size={16} />
        AI Rewrite
      </button>
      
      <button className="px-4 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm ml-2">
        Generate Content
      </button>
    </div>
  );
}
