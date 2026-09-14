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
    SiVercel,
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
    Vercel: { icon: SiVercel, color: '#eeebf1' },
}

function Skills() {
    const skillGroups = [
        {
            number: '01',
            title: 'Language',
            skills: [
                { name: 'HTML', description: '기본적인 태그를 알고 사용할 수 있습니다.' },
                { name: 'CSS', description: '기본적인 CSS를 알고 사용할 수 있습니다.' },
                { name: 'JavaScript', description: 'ES6+ 문법을 알고 비동기 처리에 활용할 수 있습니다.' },
                { name: 'TypeScript', description: 'React Native 개발 시에 사용해본 적이 있습니다.' },
                { name: 'Java', description: '2학년 때 학교에서 처음 배운 언어이며 얼마 전 다시 공부하여 기본적인 문법을 알고 있습니다.' },
            ],
        },
        {
            number: '02',
            title: 'Frontend',
            skills: [
                { name: 'React', description: '협업 시에는 아직 사용한 적이 없으나 얼마 전 독학하며 개인 프로젝트를 한 적이 있습니다.' },
                { name: 'React Native', description: '가장 많은 프로젝트에 사용해봤으며, 컴포넌트 설계 및 상태 관리가 가능합니다.' },
                { name: 'Vue', description: '올해 1학기에 학교에서 배운 적이 있으며, 간단한 개인 프로젝트를 해본 적이 있습니다.' },
                { name: 'Redux', description: '프로젝트에 사용해본 적은 없지만 간단한 강의를 통해 학습한 적이 있습니다.' },
                { name: 'Axios', description: '프로젝트 시 REST API 연동에 사용한 적이 있습니다.' },
                { name: 'Zustand', description: '프로젝트 시 전역 상태 관리에 사용한 적이 있습니다.' },
            ],
        },
        {
            number: '03',
            title: 'Tools',
            skills: [
                { name: 'GitHub', description: '브랜치 기반의 개발을 위해 사용한 적이 있습니다.' },
                { name: 'Git', description: '협업 또는 개인 프로젝트 시 사용하였습니다.' },
                { name: 'Notion', description: '프로젝트 시 문서화 및 협업을 위해 사용하였습니다.' },
                { name: 'Figma', description: '컴포넌트 및 스크린 설계를 위해 기본적인 기능을 사용할 수 있습니다.' },
                { name: 'Vercel', description: 'React 웹 서비스를 배포해본 경험이 있습니다.' },
            ],
        },
    ]
    const [activeIndex, setActiveIndex] = useState(0)
    const activeGroup = skillGroups[activeIndex]

    return (
        <section id="skills" className="skills section-reveal">
            <div className="skills-inner">
                <header className="skills-header">
                    <p className="skills-number">04</p>
                    <h2>Skills<span>.</span></h2>
                </header>

                <div className="skills-tabs scroll-reveal" role="tablist" aria-label="기술 분류">
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
                    className="skills-panel scroll-reveal scroll-reveal--delay"
                    id={`skills-panel-${activeGroup.number}`}
                    role="tabpanel"
                    aria-labelledby={`skills-tab-${activeGroup.number}`}
                >
                    <div className="skills-tags">
                        {activeGroup.skills.map(({ name, description }) => {
                            const icon = skillIcons[name]
                            const Icon = icon?.icon

                            return (
                                <div className="skills-item" key={name}>
                                    {Icon ? (
                                        <span className="skills-icon" style={{ color: icon.color }} aria-hidden="true">
                                            <Icon />
                                        </span>
                                    ) : (
                                        <span className="skills-icon skills-icon-fallback" aria-hidden="true">Z</span>
                                    )}
                                    <div className="skills-copy">
                                        <span className="skills-name">{name}</span>
                                        <span className="skills-description">{description}</span>
                                    </div>
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
