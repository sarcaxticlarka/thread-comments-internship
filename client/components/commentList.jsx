// "use client"
// import Comment from './comment'

// export default function CommentList({ comments, onUpdate }) {
//   return (
//     <div className="space-y-4">
//       {comments.map(comment => (
//         <div key={comment.id} className="relative">
//           <Comment comment={comment} onUpdate={onUpdate} />
//           {comment.children?.length > 0 && (
//             <div className="ml-8 mt-4 relative">
              
//               <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gray-300 to-transparent"></div>
//               <div className="pl-4 border-l-2 border-gray-200 space-y-4">
//                 <CommentList comments={comment.children} onUpdate={onUpdate} />
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   )
// }


"use client"
import Comment from './comment'

export default function CommentList({ comments, onUpdate }) {
  return (
    <div className="space-y-6">
      {comments.map(comment => (
        <div key={comment.id} className="relative">
          <Comment comment={comment} onUpdate={onUpdate} />
          {comment.children?.length > 0 && (
            <div className="ml-10 mt-6 relative">
               <div className="absolute -left-6 top-2 bottom-2 w-1.5 rounded-full bg-gradient-to-b from-indigo-300 via-purple-300 to-pink-300 opacity-70"></div>

               <div className="pl-8 border-l-2 border-indigo-200 space-y-6">
                <CommentList comments={comment.children} onUpdate={onUpdate} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
