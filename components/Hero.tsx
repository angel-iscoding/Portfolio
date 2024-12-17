import React from 'react';
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaDownload, FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
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
        

        <div className='flex justify-center relative my-10 z-10'>
            <div className='flex flex-col items-center justify-center'>

{/*                 <div className="">
                    <img src="/profile.jpg" alt="Profile image" width={200} style={{borderRadius: '20%'}}/>
                </div> */}

                <TextGenerateEffect
                className='text-center lg:text-6xl'
                classText='gradiet-text-title'
                words='Software Developer'
                />
                <TextGenerateEffect
                className='text-center lg:text-7xl pb-5'
                words='Luisangel Avila Afanador'
                />

                <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-2xl">
                    Fullstack Next.js, Typescript & Node.js
                </p>

                <div className='flex flex-row'>
                    <a href="#about" className='px-3'>
                        <MagicButton
                        color='bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]'
                        title='Show my work     '
                        icon={<FaLocationArrow/>}
                        position='right'
                        otherClasses='h-50%'
                        />
                    </a>

                    <a href="#about" className='px-3'>
                        <MagicButton
                        color='bg-[conic-gradient(from_90deg_at_50%_50%,#cbeaff_0%,#4c93aa_50%,#cbeaff_100%)]'
                        title='Download my CV'
                        icon={<FaDownload/>}
                        position='right'
                        otherClasses='h-50%'
                        />
                    </a>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Hero