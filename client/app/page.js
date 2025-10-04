// "use client"
// import CommentList from '../components/commentList'
// import { useEffect, useState } from 'react'

// export default function HomePage() {
//   const [comments, setComments] = useState([])
//   const [text, setText] = useState('')
//   const [author, setAuthor] = useState('')
//   const [isLoading, setIsLoading] = useState(false)

//   const fetchComments = async () => {
//     try {
//       const res = await fetch('/api/comments')
//       const data = await res.json()
//       setComments(data)
//     } catch (error) {
//       console.error('Failed to fetch comments:', error)
//     }
//   }

//   useEffect(() => {
//     fetchComments()
//   }, [])

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!text.trim() || !author.trim()) return
    
//     setIsLoading(true)
//     try {
//       await fetch('/api/comments', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({ text, author }),
//       })
//       setText('')
//       setAuthor('')
//       await fetchComments() // Refresh comments
//     } catch (error) {
//       console.error('Failed to create comment:', error)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//       <div className="max-w-4xl mx-auto py-8 px-4">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">💬 Discussion Forum</h1>
//           <p className="text-gray-600">Join the conversation and share your thoughts</p>
//         </div>

//         {/* New Comment Form */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Start a new discussion</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                 placeholder="Your name"
//                 value={author} 
//                 onChange={e => setAuthor(e.target.value)} 
//                 required
//               />
//             </div>
//             <div>
//               <textarea
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 h-24 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                 placeholder="What's on your mind?"
//                 value={text} 
//                 onChange={e => setText(e.target.value)} 
//                 required
//               />
//             </div>
//             <button 
//               type="submit" 
//               disabled={isLoading}
//               className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg px-6 py-3 font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//             >
//               {isLoading ? (
//                 <>
//                   <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
//                   Posting...
//                 </>
//               ) : (
//                 <>
//                   <span>📝</span>
//                   Post Comment
//                 </>
//               )}
//             </button>
//           </form>
//         </div>

//         {/* Comments Section */}
//         <div className="bg-white rounded-xl shadow-lg border border-gray-200">
//           <div className="p-6 border-b border-gray-200">
//             <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
//               <span>💭</span>
//               Comments ({comments.length})
//             </h2>
//           </div>
//           <div className="p-6">
//             {comments.length > 0 ? (
//               <CommentList comments={comments} onUpdate={fetchComments} />
//             ) : (
//               <div className="text-center py-12">
//                 <div className="text-6xl mb-4">🤔</div>
//                 <p className="text-gray-500 text-lg">No comments yet. Be the first to start the discussion!</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client"
import CommentList from '../components/commentList'
import { useEffect, useState } from 'react'
import { User, Edit2, MessageCircle } from 'lucide-react'

export default function HomePage() {
  const [comments, setComments] = useState([])
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const fetchComments = async () => {
    try {
      const res = await fetch('/api/comments')
      const data = await res.json()
      setComments(data)
    } catch (error) {
      console.error('Failed to fetch comments:', error)
    }
  }

  useEffect(() => {
    fetchComments()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!text.trim() || !author.trim()) return

    setIsLoading(true)
    try {
      await fetch('/api/comments', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ text, author }),
      })
      setText('')
      setAuthor('')
      await fetchComments()  
    } catch (error) {
      console.error('Failed to create comment:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-200 font-sans text-gray-900">
      <div className="max-w-4xl mx-auto py-10 px-6">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-extrabold tracking-tight mb-3 flex justify-center items-center gap-3 text-indigo-900">
            <MessageCircle size={48} className="text-indigo-600" />
            Discussion Forum
          </h1>
          <p className="text-lg text-indigo-800/75">Join the community and share your thoughts</p>
        </header>

    
        <section className="bg-white rounded-2xl shadow-md p-8 mb-12 border border-indigo-300">
          <h2 className="text-2xl font-semibold text-indigo-900 mb-6 flex items-center gap-3">
            <Edit2 size={24} className="text-indigo-500" />
            Start a New Discussion
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User size={20} className="absolute left-4 top-3.5 text-indigo-400" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 text-gray-900 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="Your name"
                value={author}
                onChange={e => setAuthor(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <textarea
                className="w-full border border-indigo-300 rounded-xl px-4 py-3 h-28 resize-none placeholder-indigo-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="What's on your mind?"
                value={text}
                onChange={e => setText(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="flex justify-center items-center gap-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold rounded-xl px-8 py-3 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Posting...
                </>
              ) : (
                <>
                  <Edit2 size={20} />
                  Post Comment
                </>
              )}
            </button>
          </form>
        </section>

        {/* Comments */}
        <section className="bg-white rounded-2xl shadow-md border border-indigo-300">
          <header className="flex items-center gap-3 p-6 border-b border-indigo-200">
            <MessageCircle size={28} className="text-indigo-600" />
            <h2 className="text-2xl font-semibold text-indigo-900">Comments ({comments.length})</h2>
          </header>
          <main className="p-6 min-h-[200px]">
            {comments.length > 0 ? (
              <CommentList comments={comments} onUpdate={fetchComments} />
            ) : (
              <div className="text-center py-20 text-indigo-400 select-none">
                <div className="text-7xl mb-5">🤔</div>
                <p className="text-xl">No comments yet. Be the first to start the discussion!</p>
              </div>
            )}
          </main>
        </section>
      </div>
    </div>
  )
}
