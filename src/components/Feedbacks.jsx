import { useContext } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import MobileContext from '../context/mobileContext';

const FeedbackCard = ({index, testimonial, name, designation, company, image}) => {
  const isMobile = useContext(MobileContext);

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className={` bg-black-200 p-10 rounded-3xl ${isMobile? "" : 'xs:w-[20rem]'} w-full`}
    >
      <p className='text-white font-black text-[48px]'>"</p>

      <div className='mt-1'>
        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

        <div className='mt-7 flex justify-between items-center gap-1'>

          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span> {name}
            </p>

            <p className='mt-1 text-secondary text-[12px]'>
              {designation} of {company}
            </p>
          </div>

          <img src={image} alt={`feedback-by-${name}`} 
           className='w-10 h-10 rounded-full object-cover'
          />

        </div>
      </div>

    </motion.div>
  )
}

const Feedbacks = () => {
  const isMobile = useContext(MobileContext);
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${isMobile? 'sm:px-16 px-6 py-[2.5rem]' : 'sm:px-16 px-6 sm:py-10 py-08'} bg-tertiary rounded-2xl min-h-[300px]`}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mb-5`}>
          What others say
        </p>
        <h2 className={`${styles.sectionHeadText} mt-6`}>Testimonials.</h2>
      </motion.div>
      </div>

      <div className={`${ isMobile? 'px-6 -mt-28 pb-14' : 'sm:px-30 px-16 -mt-12 pb-14' } flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard 
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks , "")