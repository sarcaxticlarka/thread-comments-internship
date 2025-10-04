'use client'
import { useState } from 'react'
import { apiFetch } from '../utils/api'

export default function ReplyForm({ parentId, onSuccess, onCancel }) {
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!text.trim() || !author.trim()) return
    
    setIsSubmitting(true)
    try {
      await apiFetch(`/comments/${parentId}/reply`, {
        method: 'POST',
        body: JSON.stringify({ text, author }),
      })
      setText('')
      setAuthor('')
      if (onSuccess) onSuccess()
    } catch (error) {
      console.error('Failed to submit reply:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-medium text-gray-700">💭 Replying to this comment</span>
      </div>
      
      <div>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Your name"
          value={author} 
          onChange={e => setAuthor(e.target.value)} 
          required
        />
      </div>
      
      <div>
        <textarea
          className="w-full border border-gray-300 rounded-lg px-3 py-2 h-20 text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Write your reply..."
          value={text} 
          onChange={e => setText(e.target.value)} 
          required
        />
      </div>
      
      <div className="flex gap-2 pt-2">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin h-3 w-3 border-2 border-white border-t-transparent rounded-full"></div>
              Posting...
            </>
          ) : (
            <>
              <span>💬</span>
              Reply
            </>
          )}
        </button>
        
        {onCancel && (
          <button 
            type="button" 
            onClick={onCancel}
            className="bg-gray-200 text-gray-700 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-300 transition-all duration-200"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}
