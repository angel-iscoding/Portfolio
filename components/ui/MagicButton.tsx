import React from 'react'

const MagicButton = ({title, icon, color, position, handleClick, otherClasses}: {title?: string, icon: React.ReactNode, color: string, position: string, handleClick?: () => void; otherClasses?: string}) => {
  return (
    <button className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:mt-10 ${otherClasses}`} onClick={handleClick}>
        <span className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] ${color}`} />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
    </button>
  )
}

export default MagicButton 