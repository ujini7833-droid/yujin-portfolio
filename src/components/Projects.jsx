import { useEffect, useRef } from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'
import travodoImage from '../assets/travodo.png'
import lastcupImage from '../assets/lastcup.png'
import todaktodakImage from '../assets/todaktodak.png'

const projects = [
    { name: 'TRAVODO', type: 'MOBILE APP', tagline: '지금 Travodo와 여행을 시작하세요!', image: travodoImage, imageClass: 'travodo', description: '여행의 설렘을 더 편하게 기록하고 계획할 수 있는 모바일 여행 서비스입니다.', skills: ['React Native', 'TypeScript', 'Axios'], role: '여행 서비스의 화면 UI를 구현하고, 재사용 가능한 컴포넌트 구조를 설계했습니다.', learning: '사용자 흐름을 기준으로 화면을 설계하며, 팀원과 일관된 UI를 맞추는 협업 방식을 배웠습니다.', github: 'https://github.com/Travodo/Travodo-Frontend.git' },
    { name: 'LASTCUP', type: 'MOBILE APP', tagline: '직접 정하는 나만의 하루 카페인, 당류 기준', image: lastcupImage, imageClass: 'lastcup', description: '개인 기준에 맞춰 카페인과 당류 섭취를 관리할 수 있도록 돕는 모바일 서비스입니다.', skills: ['React Native', 'TypeScript', 'Zustand'], role: '온보딩과 섭취 기준 설정 화면을 구현하고, 사용자 입력 상태를 관리했습니다.', learning: '복잡한 건강 정보를 사용자가 쉽게 결정할 수 있도록 단계별 인터페이스로 풀어내는 법을 익혔습니다.', github: 'https://github.com/ujini7833-droid/Lastcup-FE-portfolio.git' },
    { name: 'TODAKTODAK', type: 'MOBILE APP', tagline: '작은 위로를 건네는 마음 돌봄 서비스', image: todaktodakImage, imageClass: 'todaktodak', description: '일상 속 감정을 돌아보고 따뜻한 위로를 나눌 수 있도록 만든 마음 돌봄 앱입니다.', skills: ['React Native', 'JavaScript', 'Figma'], role: '서비스 화면 UI를 구현하고, 사용자에게 편안하게 다가가는 인터랙션을 고민했습니다.', learning: '기능 구현뿐 아니라 서비스의 분위기와 감정적 경험도 UI/UX의 중요한 일부임을 배웠습니다.', github: 'https://github.com/todagtodag-skhu/Frontend.git' },
]

function Projects() {
    const projectsRef = useRef(null)

    useEffect(() => {
        const cards = projectsRef.current?.querySelectorAll('.project-card')
        if (!cards?.length) return undefined
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.2 })
        cards.forEach((card) => observer.observe(card))
        return () => observer.disconnect()
    }, [])

    return (
        <section id="projects" className="projects" ref={projectsRef}>
            <div className="projects-header"><p>05</p><h2>Projects<span>.</span></h2></div>
            <div className="projects-list">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
        </section>
    )
}

export default Projects
