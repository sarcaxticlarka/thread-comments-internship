'use client'
import Avatar from './avatar'
import ReplyForm from './replyForm'
import { useState } from 'react'

export default function Comment({ comment, onUpdate }) {
  const [showReply, setShowReply] = useState(false)
  const [isLiking, setIsLiking] = useState(false)

  const handleLike = async () => {
    if (isLiking) return
    setIsLiking(true)
    try {
      await fetch(`/api/comments/${comment.id}/like`, { method: 'POST' })
      if (onUpdate) onUpdate() // Refresh comments to show updated like count
    } catch (error) {
      console.error('Failed to like comment:', error)
    } finally {
      setIsLiking(false)
    }
  }

  const handleReplySuccess = () => {
    setShowReply(false)
    if (onUpdate) onUpdate()
  }

  return (
    <div className="bg-gray-50 rounded-lg p-4 transition-all duration-200 hover:bg-gray-100">
      <div className="flex gap-3 items-start">
        <Avatar name={comment.author} />
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-gray-900">{comment.author}</span>
            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
              {comment.timestamp}
            </span>
            {comment.children?.length > 0 && (
              <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full font-medium">
                {comment.children.length} {comment.children.length === 1 ? 'reply' : 'replies'}
              </span>
            )}
          </div>
          
          {/* Comment text */}
          <p className="text-gray-800 mb-3 leading-relaxed">{comment.text}</p>
          
          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={handleLike} 
              disabled={isLiking}
              className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                isLiking 
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                  : 'bg-red-100 text-red-600 hover:bg-red-200 hover:scale-105'
              }`}
            >
              <span className={isLiking ? 'animate-pulse' : ''}>{isLiking ? '💗' : '❤️'}</span>
              <span>{comment.likes}</span>
            </button>
            
            <button 
              onClick={() => setShowReply(!showReply)} 
              className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-600 hover:bg-blue-200 transition-all duration-200 hover:scale-105"
            >
              <span>💬</span>
              <span>Reply</span>
            </button>
          </div>
          
          {/* Reply form */}
          {showReply && (
            <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
              <ReplyForm 
                parentId={comment.id} 
                onSuccess={handleReplySuccess}
                onCancel={() => setShowReply(false)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
