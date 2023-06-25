import React from 'react'
import SkillsLanguage from './Skills_Language.jsx'
import SkillsOther from './Skills_Other'
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
         <h2 className="section__title">Skills</h2>
        <span className="section__subtitle skills_subtitle">My technical level</span>
        <div className='skills__container container grid'>
        <SkillsLanguage/>
        <SkillsOther/>
        </div>
    
    
    
    </section>
  )
}

export default Skills