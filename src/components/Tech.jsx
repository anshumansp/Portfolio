import { useContext, lazy, Suspense} from 'react';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import MobileContext from '../context/mobileContext';
const BallCanvas = lazy(() => import('./canvas/Ball'));


const Tech = () => {
  const isMobile = useContext(MobileContext);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology)=> (
        <div className='w-28 h-24 mt-8 flex justify-center' key={technology.name}>
          {isMobile? <img src={technology.icon}/> : <Suspense fallback={"Loading..."} >
          <BallCanvas icon={technology.icon} />
          </Suspense>}
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");