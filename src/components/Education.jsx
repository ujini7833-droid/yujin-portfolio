import './Education.css'

function Education() {
    return (
        <section id="education" className="education section-reveal">
            <div className="education-inner">
                <header className="education-header">
                    <p className="education-number">03</p>
                    <h2>Education<span>.</span></h2>
                </header>

                <div className="education-list">
                    <article className="education-entry">
                        <div className="education-meta scroll-reveal">
                            <p>ACADEMIC</p>
                            <span>01</span>
                        </div>

                        <div className="education-content scroll-reveal scroll-reveal--delay">
                            <h3>성공회대학교 <span>소프트웨어융합학부</span></h3>
                            <div className="education-info">
                                <p>재학</p>
                                <p>2023.03 —</p>
                            </div>

                            <section className="education-award">
                                <p className="education-award-label">교내 소프트웨어 경진대회 <span>1위</span></p>
                                <p className="education-period">2026.04 — 2026.05</p>
                                <p className="education-description">
                                    React Native를 활용한 ‘토닥토닥’ 앱 서비스 개발
                                </p>
                                <span className="education-tag">React Native</span>
                                <span className='education-tag'>TypeScript</span>
                                <span className='education-tag'>JavaScript</span>
                            </section>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Education;
