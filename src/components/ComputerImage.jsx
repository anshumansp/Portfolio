import React from 'react';
import { computerImage } from '../constants';

function Trial() {
  return (
    <div className='flex justify-center relative top-[45%]'>
      <img className='h-[250px] w-auto' src={computerImage.img} alt="computer" />
    </div>
  )
}

export default Trial;