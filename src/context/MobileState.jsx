import React, { useState, useEffect } from 'react';
import MobileContext from './mobileContext';

const MobileState = (props) => {
    const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    setisMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setisMobile(e.matches);
    };
    
    mediaQuery.addEventListener("change", handleMediaQueryChange, { passive: true });
    
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);


  return(
    <MobileContext.Provider value={ isMobile } >
        {props.children}
    </MobileContext.Provider>
  )
}

export default MobileState;