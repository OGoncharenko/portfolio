import React, { forwardRef } from 'react'
import ResumeItem from './ResumeItem';
import photoImg from '../assets/olga_portfolio_301.jpg'

const Resume = forwardRef((props, ref) => {
  return (
    <div id='resume' className='max-w-[1040px] grid sm:grid-cols-2 gap-4 m-auto md:pl-20 p-4 py-16' ref={ref}>
        <div className='text-center md:text-justify md:indent-8'>
            <h1 className='text-4xl font-bold text-[#001b5e]'>Hi, I'm Olga</h1>
            <p className='text-xl font-normal text-stone-500 mt-8'>I'm a dedicated QA Engineer with a passion for ensuring the highest quality in software products. I specialize in automated testing using Cypress.js. My journey in quality assurance has equipped me with a keen eye for detail and a comprehensive understanding of testing methodologies.</p>
            <p className='text-xl font-normal text-stone-500 mb-8'>Currently, I'm also dedicated to expanding my skill set by diving into the world of ReactJS.</p>
            <a className='bg-[#001b5e] text-gray-100 w-full p-3 rounded-lg' href='https://drive.google.com/uc?id=1c_Rz82h3DDGFW-L9_bSMtDG3ijqI4JF0&export=download' target='_blank'>
                Download resume
            </a>
        </div>
        <div className='order-first md:order-last'>
            <ResumeItem img={photoImg}/>
        </div>
    </div>
  )
})

export default Resume;