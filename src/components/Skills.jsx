import './Skills.css'
import { useState } from 'react'

function Skills() {
    const skillGroups = [
        {
            number: '01',
            title: 'Language',
            skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Java'],
        },
        {
            number: '02',
            title: 'Frontend',
            skills: ['React', 'React Native', 'Vue', 'Redux', 'Axios', 'Zustand'],
        },
        {
            number: '03',
            title: 'Tools',
            skills: ['GitHub', 'Git', 'Notion', 'Figma'],
        },
    ]
    const [activeIndex, setActiveIndex] = useState(0)
    const activeGroup = skillGroups[activeIndex]

    return (
        <section id="skills" className="skills">
            <div className="skills-inner">
                <header className="skills-header">
                    <p className="skills-number">04</p>
                    <h2>Skills<span>.</span></h2>
                </header>

                <div className="skills-tabs" role="tablist" aria-label="기술 분류">
                    {skillGroups.map((group, index) => (
                        <button
                            className={activeIndex === index ? 'active' : ''}
                            id={`skills-tab-${group.number}`}
                            key={group.title}
                            role="tab"
                            aria-controls={`skills-panel-${group.number}`}
                            aria-selected={activeIndex === index}
                            onClick={() => setActiveIndex(index)}
                        >
                            <span>{group.number}</span>
                            {group.title}
                        </button>
                    ))}
                </div>

                <section
                    className="skills-panel"
                    id={`skills-panel-${activeGroup.number}`}
                    role="tabpanel"
                    aria-labelledby={`skills-tab-${activeGroup.number}`}
                >
                    <h3>{activeGroup.title}</h3>
                    <div className="skills-tags">
                        {activeGroup.skills.map((skill) => (
                            <span key={skill}>{skill}</span>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Skills
