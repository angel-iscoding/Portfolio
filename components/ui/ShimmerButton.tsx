import React from 'react'

const ShimmerButton = () => {
  return (
    <button className="inline-flex relative h-fill p-1 animate-shimmer items-center justify-center rounded-md border bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      Contact Me!
    </button>
  )
}

export default ShimmerButton