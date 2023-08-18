import React, {forwardRef} from 'react'
import ProjectItem from './ProjectItem'
import bullpenImg from '../assets/bullpen.png'
import cloverpopImg from '../assets/cloverpop.png'
import easymergeImg from '../assets/easymerge.jpg'
import platformaticaImg from '../assets/platformatica.png'

const Projects = forwardRef((props, ref) => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' ref={ref}>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center text-xl font-normal text-stone-500 py-8'>Let me highlight a couple of projects that I've been fortunate to work on. They have honed my skills and passion for delivering high-quality software</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={cloverpopImg} title='Cloverpop App' href='https://www.cloverpop.com/'/>
        <ProjectItem img={bullpenImg} title='BullpenRE App' href='https://www.bullpenre.com/'/>
        <ProjectItem img={platformaticaImg} title='Platformatica App' href='https://platformatica.com/apps/'/>
        <ProjectItem img={easymergeImg} title='Easymerge App' href='https://easymerge-staging.herokuapp.com/'/>
      </div>
    </div>
  )
})

export default Projects;