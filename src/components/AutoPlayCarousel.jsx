import React from 'react'
import { skills as items } from '../utills/skillsName'
const AutoPlayCarousel = () => {
  return (
    <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {
          items.map((item, index) => (
            <li className='mx-8 max-w-none h-24' key={index}>
              <img src={item.image} alt={item.name} className='h-24'/>
            </li>
          ))
        }
      </ul>
      <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {
          items.map((item, index) => (
            <li className='mx-8 max-w-none' key={index}>
              <img src={item.image} alt={item.name} className='h-24'/>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default AutoPlayCarousel
