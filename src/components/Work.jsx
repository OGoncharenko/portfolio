import React, {forwardRef} from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        title: 'QA Engineer',
        company: 'Cloverpop',
        year: '2022',
        details: 'Designed and implemented test automation framework using Cypress, JavaScript with Page Object Models (POM). Plugged in test framework into CI pipeline (GitHub Actions). Organized automation testing strategy. Lead QA team efforts to automate test scenarios. Performed API testing in Postman. Used Jira to document results of tests for the software development team.',
    },
    {
        title: 'Test Engineer',
        company: 'Bullpen',
        year: '2021',
        details: 'Contributed to automation regression testing and other automation efforts using Cypress, JavaScript. Created test plans and scripts to ensure development deliverables match desired requirements and expectations. Analyzed test results to discover and report out on defects. Took part in bug triage meetings to confirm correct priority, track and validate the severity of bugs ensuring best resolution outcome. Documented defect/issues in Linear bug tracking system, including relevant brief descriptions of the issue with detailed steps to reproduce.',
    },
    {
        title: 'QA Engineer',
        company: 'Platformatica',
        year: '2020-2021',
        details: 'Developed test scenarios and test cases for assigned modules of the application using Trello project management and bug tracking system. Contributed to automated test cases using WebDriverIO, JavaScript (Page Object Model approach). Planned and executed functional, integration, regression, usability, compatibility, system and performance testing. Applied Simulator for mobile app testing on Android platform using Appium tool.',
    },
    {
        title: 'Manual QA',
        company: 'Loan Snap',
        year: '2019',
        details: 'Executed the Black box manual testing (Ad-hoc, Smoke, Functional). Reported and verified software defects. Performed Cross-Browser and Cross-System Compatibility Testing. Worked in an Agile software development environment and performed Testing in each Sprint.',
    },
    {
        title: 'Manual QA',
        company: 'easymerge.io',
        year: '2018-2019',
        details: 'Developed, analyzed and implemented test cases. Conducted functional, integration, regression and acceptance testing. Worked closely with development team on developing test strategies. Researched and reported bugs and maintained bug life cycle.',
    },
]

const Work = forwardRef((props, ref) => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' ref={ref}>
        <h1 className='text-4xl font-bold mb-3 text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem
            key={idx}
            title={item.title}
            company={item.company}
            year={item.year}
            details={item.details}
            />
        ))}
    </div>
  )
})

export default Work;