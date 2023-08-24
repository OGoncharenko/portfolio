import React, {forwardRef} from 'react'
import { TypeAnimation } from 'react-type-animation'
import  { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import backgroundImg from '/background.jpg'

const Main = forwardRef((props, ref) => {
  return (
    <div id='main' ref={ref}>
        <img className='w-screen h-screen object-cover object-left' src={backgroundImg} alt='/'/>
        <div className='w-screen h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Olga Goncharenko</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4'>
                    Tech Enthusiast in
                
                    <TypeAnimation
                        sequence={[
                            'JavaScript',
                            2000,
                            'Cypress.io',
                            2000,
                            'ReactJS',
                            2000,
                            '',
                            500
                        ]}
                        wrapper="div"
                        speed={50}
                        cursor={true}
                        style={{ fontSize: '1em', paddingLeft: '5px' }}
                        repeat={Infinity}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <a href='https://www.linkedin.com/in/olga-s-goncharenko/' target='_blank'>
                        <FaLinkedin size={30} />
                    </a>
                    <a href='https://www.instagram.com/olyasgon/' target='_blank'>
                        <FaInstagram size={30} />
                    </a>
                    <a href='https://github.com/OGoncharenko' target='_blank'>
                        <FaGithub size={30} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
})

export default Main;