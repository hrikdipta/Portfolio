import React from 'react';
import { AnimatedBackground } from 'animated-backgrounds';

function Background({children}) {
  return (
    <div className=''>
      <AnimatedBackground animationName="cosmicDust" style={{ "background-color": "000000" }} />
       {children}
    </div>
  );
}

export default Background;