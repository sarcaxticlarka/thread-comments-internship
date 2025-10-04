"use client"

const colors = [
  'bg-gradient-to-br from-purple-500 to-pink-500',
  'bg-gradient-to-br from-blue-500 to-cyan-500',
  'bg-gradient-to-br from-green-500 to-emerald-500',
  'bg-gradient-to-br from-orange-500 to-red-500',
  'bg-gradient-to-br from-indigo-500 to-purple-500',
  'bg-gradient-to-br from-pink-500 to-rose-500',
  'bg-gradient-to-br from-yellow-500 to-orange-500',
  'bg-gradient-to-br from-teal-500 to-cyan-500'
]

export default function Avatar({ name }) {
  const colorIndex = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length
  const gradientClass = colors[colorIndex]

  return (
    <div className={`w-10 h-10 ${gradientClass} text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg ring-2 ring-white transition-transform hover:scale-105`}>
      {name[0].toUpperCase()}
    </div>
  )
}
