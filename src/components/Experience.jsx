import './Experience.css'

function Experience() {
    const achievements = [
        'React Native를 활용한 앱 UI 구현',
        '크로스플랫폼 프로그래밍 교육과정 이수',
        '그로우톤 대상',
        '대학 연합 프로젝트 tripleS 2위',
    ]

    const skills = ['React Native', 'JavaScript', 'TypeScript']

    return (
        <section id="experience" className="experience">
            <div className="experience-inner">
                <header className="experience-header">
                    <p className="experience-number">02</p>
                    <h2>Experience<span>.</span></h2>
                </header>

                <article className="experience-card">
                    <div className="experience-summary">
                        <h3>GDGOC SKHU <span>4기</span></h3>
                        <p className="experience-role">모바일 파트</p>
                        <p className="experience-period">2025.09 — 2026.06</p>
                    </div>

                    <div className="experience-details">
                        <section className="experience-group">
                            <h4>주요 성과</h4>
                            <ul>
                                {achievements.map((achievement) => (
                                    <li key={achievement}>{achievement}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="experience-group">
                            <h4>습득 역량</h4>
                            <div className="experience-skills">
                                {skills.map((skill) => (
                                    <span key={skill}>{skill}</span>
                                ))}
                            </div>
                        </section>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Experience
