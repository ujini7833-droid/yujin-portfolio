import { useEffect, useRef } from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'
import travodoImage from '../assets/travodo.png'
import lastcupImage from '../assets/lastcup.png'
import todaktodakImage from '../assets/todaktodak.png'

const projects = [
    { name: 'TRAVODO', type: 'MOBILE APP', tagline: '지금 Travodo와 여행을 시작하세요!', image: travodoImage, imageClass: 'travodo', description: '구글 맵 기반으로 여행 전, 여행 중, 여행 후 상태를 모두 관리할 수 있는 여행 앱입니다.', skills: ['React Native', 'JavaScript', 'Axios'], role: '컴포넌트 구조 설계, 스크린 구현(온보딩, 홈, 설정, 계정 정보, 여행 전/여행 중/여행 후), api 연동', learning: '사용자 흐름을 기준으로 스크린 구조를 설계하며, GitHub를 이용하여 팀원과 협업하는 방식을 배웠습니다.', github: 'https://github.com/Travodo/Travodo-Frontend.git' },
    { name: 'LASTCUP', type: 'MOBILE APP', tagline: '직접 정하는 나만의 하루 카페인, 당류 기준', image: lastcupImage, imageClass: 'lastcup', description: '개인 기준에 맞춰 카페인과 당류 섭취를 관리할 수 있도록 돕는 모바일 서비스입니다.', skills: ['React Native', 'TypeScript', 'Zustand'], role: '컴포넌트 구조 설계, 스크린 구현(로그인, 온보딩, 캘린더, 마이페이지, 나만의 메뉴), api 연동', learning: '음료 등록하기처럼 절차적 기능을 만들 때 사용자가 더 자연스럽게 사용할 수 있도록 고민했습니다.', github: 'https://github.com/ujini7833-droid/Lastcup-FE-portfolio.git' },
    { name: 'TODAKTODAK', type: 'MOBILE APP', tagline: '작은 위로를 건네는 마음 돌봄 서비스', image: todaktodakImage, imageClass: 'todaktodak', description: '보호자와 아이가 함께 사용하는 칭찬 스티커판 기반의 미션형 습관 형성 서비스입니다.', skills: ['React Native', 'JavaScript', 'TypeScript'], role: '성장이 파트 스크린 개발 및 API 연동, 스티커판 등 컴포넌트 제작', learning: '앱 사용 대상에 따른 UI/UX를 고민하게 되었습니다.', github: 'https://github.com/todagtodag-skhu/Frontend.git' },
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
