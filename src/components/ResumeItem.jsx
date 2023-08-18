import React from 'react'

const ResumeItem = ({img}) => {
  return (
    <div className='relative flex items-center justify-center md:justify-end h-auto pt-6'>
        <img src={img} alt='/' className='rounded-full'/>
    </div>
  )
}

export default ResumeItem;