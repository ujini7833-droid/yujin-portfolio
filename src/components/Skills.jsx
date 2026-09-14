import './Skills.css'
import { useState } from 'react'
import {
    SiAxios,
    SiCss,
    SiFigma,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiNotion,
    SiOpenjdk,
    SiReact,
    SiRedux,
    SiTypescript,
    SiVuedotjs,
} from 'react-icons/si'

const skillIcons = {
    HTML: { icon: SiHtml5, color: '#e34f26' },
    CSS: { icon: SiCss, color: '#1572b6' },
    JavaScript: { icon: SiJavascript, color: '#f7df1e' },
    TypeScript: { icon: SiTypescript, color: '#3178c6' },
    Java: { icon: SiOpenjdk, color: '#f89820' },
    React: { icon: SiReact, color: '#61dafb' },
    'React Native': { icon: SiReact, color: '#61dafb' },
    Vue: { icon: SiVuedotjs, color: '#42b883' },
    Redux: { icon: SiRedux, color: '#764abc' },
    Axios: { icon: SiAxios, color: '#5a29e4' },
    GitHub: { icon: SiGithub, color: '#eeebf1' },
    Git: { icon: SiGit, color: '#f05032' },
    Notion: { icon: SiNotion, color: '#eeebf1' },
    Figma: { icon: SiFigma, color: '#f24e1e' },
}

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
                    <div className="skills-tags">
                        {activeGroup.skills.map((skill) => {
                            const icon = skillIcons[skill]
                            const Icon = icon?.icon

                            return (
                                <div className="skills-item" key={skill}>
                                    {Icon ? (
                                        <span className="skills-icon" style={{ color: icon.color }} aria-hidden="true">
                                            <Icon />
                                        </span>
                                    ) : (
                                        <span className="skills-icon skills-icon-fallback" aria-hidden="true">Z</span>
                                    )}
                                    <span className="skills-name">{skill}</span>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Skills
