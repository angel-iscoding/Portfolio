import React from 'react';
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaDownload, FaLocationArrow } from 'react-icons/fa';
import { FlipWords } from './ui/FlipWords';
import NavBar from "@/components/ui/NavBar";
import BorderButton from './ui/ShimmerButton';
const Hero = () => {
    const words = ["Node.js", "Typescript", "Javascript", "Express.js", "Next.js"];

  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-80 h-[80vh] w-[50vw]' fill='white'/>
            <Spotlight className='top-28 left-40 h-[80vh] w-[50vh]' fill='white'/>
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
        

        <div className='flex flex-col justify-center items-center relative z-10 md:flex-row'>

                <div className='flex flex-col h-[70vh] w-full justify-start items-center order-last md:mx-10 md:order-first md:w-1/2 md:justify-center'>
                    <TextGenerateEffect
                    className='text-center text-4xl md:text-5xl lg:text-5xl'
                    words="Hi, i'm Angel Afanador"
                    />
                    <TextGenerateEffect
                    className='text-center text-6xl md:text-7xl lg:text-7xl'
                    classText='gradiet-text-title whitespace-nowrap'
                    words='Software Developer'
                    />

                    <div className="mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center text-2xl md:text-lg lg:text-2xl py-5">
                        <span className="whitespace-nowrap">Working with</span>
                        <FlipWords words={words} className=''/> <br />
                    </div>

                    <div className='flex flex-row'>
                        <a href="#about" className='px-1'>
                            <MagicButton
                            color='bg-[conic-gradient(from_90deg_at_50%_50%,#cbeaff_0%,#4c93aa_50%,#cbeaff_100%)]'
                            title='Download my CV'
                            icon={<FaDownload/>}
                            position='right'
                            otherClasses='md:w-60'
                            />
                        </a>
                        
                        <a href="#about" className='px-1'>
                            <MagicButton
                            color='bg-[conic-gradient(from_90deg_at_50%_50%,#cbeaff_0%,#4c93aa_50%,#cbeaff_100%)]'
                            icon={<img src="/git.svg" width={25}/>}
                            position='right'
                            otherClasses='md:w-30'
                            />
                        </a>

                        <a href="#about" className='px-1'>
                            <MagicButton
                            color='bg-[conic-gradient(from_90deg_at_50%_50%,#cbeaff_0%,#4c93aa_50%,#cbeaff_100%)]'
                            icon={<img src="/linkedinIcon.svg" width={25}/> }
                            position='right'
                            otherClasses='md:w-30'
                            />
                        </a>

                        
                        
                    </div>
                </div>

                <div className='flex h-[70vh] w-full justify-center items-center rotate-6 md:mx-10 md:w-1/2'>
                    <img src="/catexample.jpg" alt="Profile image" width={500} style={{borderRadius: '20%'}}/>
                </div>
        </div> 
    </div>
  )
}

export default Hero