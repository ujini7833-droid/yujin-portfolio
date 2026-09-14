import './About.css';

function About() {
    return (
        <section id='about' className='about section-reveal'>
            <div className='about-inner'>

                <div className='about-header'>
                    <p className='section-number'>01</p>

                    <h2>About
                        <span> Me</span>
                        <em>.</em>
                    </h2>
                    
                </div>

                <div className='about-content'>

                    <div className='about-title scroll-reveal'>
                        <p>
                            사용자와 동료를
                            <br />
                            <span>함께 생각하는 개발자</span>
                        </p>
                    </div>

                    <div className='about-description scroll-reveal scroll-reveal--delay'>
                        <p>
                            현재 성공회대학교 소프트웨어융합학부 3학년으로 재학 중이며,
                            주로 React와 React Native를 활용한 웹·모바일 개발을 진행하고 있습니다.
                        </p>

                        <p>
                            컴포넌트 설계와 최적화뿐 아니라
                            사용자를 고려한 UI/UX, 협업을 중시하며 개발하는 것을 추구합니다.
                        </p>

                        <div className='about-keywords'>
                            <span># User Experience</span>
                            <span># Collaboration</span>
                            <span># UI / UX</span>
                            <span># Frontend</span>
                        </div>
            </div>
                </div>
            </div>
        </section>
    )
}

export default About;
