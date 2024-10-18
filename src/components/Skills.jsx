import React from 'react'
import AutoPlayCarousel from './AutoPlayCarousel';
const Skills = () => {
  return (
    <div className='mb-14' name="skills">
        <div >
            <h2 className='text-3xl md:text-4xl font-Playpen-Sans py-8 text-gray-300'>Skills</h2>
        </div>
        <div>
            <AutoPlayCarousel/>
        </div>
    </div>
  )
}

export default Skills
