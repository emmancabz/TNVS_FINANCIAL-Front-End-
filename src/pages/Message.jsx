import { MessageSquare, Send } from 'lucide-react'

function Message() {
  return (
    <div className="p-6 md:p-8 lg:p-10 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 tracking-tight">Message</h1>
        <p className="text-gray-500">Internal messages and notifications</p>
      </div>

      <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8 md:p-12 text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#2ecc71]/10 flex items-center justify-center mx-auto mb-6">
          <MessageSquare className="w-8 h-8 text-[#2ecc71]" strokeWidth={1.5} />
        </div>
        <h2 className="text-xl font-medium text-gray-900 mb-2">No messages yet</h2>
        <p className="text-gray-500 text-sm max-w-sm mx-auto mb-6">
          When you have messages or notifications, they will appear here.
        </p>
        <button
          type="button"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2ecc71] text-white text-sm font-medium hover:bg-[#27ae60] transition-all duration-200 shadow-soft"
        >
          <Send className="w-4 h-4" strokeWidth={1.8} />
          Compose
        </button>
      </div>
    </div>
  )
}

export default Message
