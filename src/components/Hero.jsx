import React, { useContext, lazy, Suspense} from 'react';
import {styles} from '../styles';
import {motion} from 'framer-motion';
const ComputersCanvas = lazy(() => import('./canvas/Computers'));
const ComputerImage = lazy(() => import('./ComputerImage'));
import MobileContext from '../context/mobileContext';

const Hero = () => {
  const isMobile = useContext(MobileContext);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 ${isMobile? 'top-[100px]' : 'top-[70px]'} max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Anshuman</span></h1>

          <p className={`${styles.heroSubText} mt-0 text-white-100`}>I code ideas and dreams<br className='sm:block hidden'/> on web, from pixels to databases.</p>
        </div>
      </div>
      <Suspense fallback={null}>
        {isMobile? <ComputerImage/> : <ComputersCanvas />}
      </Suspense>

        <div className={`absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center ${isMobile? 'top-[75vh]' : 'top-[90vh]'}`}>
          <a href="#about">
            <div className='w-[34px] -my-4 h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start mt-6 p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero;