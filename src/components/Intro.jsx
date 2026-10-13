import './Intro.css';

function Intro() {
    return (
        <section id='intro' className='intro'>
            <div className='intro-inner'>
                <div className='intro-text'>
                    <p className='intro-label'>
                        WEB / MOBILE DEVELOPER
                    </p>

                    <h1>
                        동료들과의 협업과
                        <br />
                        <span>사용자 경험</span>을
                        <br /> 
                        중시하는 개발자
                    </h1>

                    <p className='intro-name'>
                        배유진
                    </p>

                    <p className='intro-description'>
                        동료들과의 협업, 사용자 경험, 편안한 UI/UX의 조화를 추구하는
                        <br />
                        웹·모바일 개발자를 희망합니다.
                    </p>

                    <div className='intro-info'>
                        <span>2004.10.14</span>
                        <span>Incheon, Korea</span>
                    </div>

                    <div className='intro-links'>
                        <a
                        href='https://github.com/ujini7833-droid'
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            <svg className='intro-link-icon' viewBox='0 0 24 24' aria-hidden='true'>
                                <path fill='currentColor' d='M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.43c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z' />
                            </svg>
                            GitHub
                        <span>↗</span>
                        </a>

                        <a href="mailto:ujini7833@gmail.com">
                            <svg className='intro-link-icon' viewBox='0 0 24 24' aria-hidden='true'>
                                <path fill='currentColor' d='M3.75 5.25h16.5c.83 0 1.5.67 1.5 1.5v10.5c0 .83-.67 1.5-1.5 1.5H3.75c-.83 0-1.5-.67-1.5-1.5V6.75c0-.83.67-1.5 1.5-1.5Zm0 2.12v9.88h16.5V7.37L12 12.83 3.75 7.37ZM5.2 6.75 12 11.25l6.8-4.5H5.2Z' />
                            </svg>
                            Email
                            <span>↗</span>
                        </a>
                    </div>
                </div>

                <div className='intro-visual'>
                    <div className='intro-circle'></div>
                    <p className='intro-number'>
                        01
                    </p>

                    <p className='intro-location'>
                        SEOUL / INCHEON
                    </p>
                </div>
            </div>

            <div className='intro-scroll'>
                <span>SCROLL TO EXPLORE</span>
            <div className='scroll-line'></div>
            </div>
        </section>
    )
}

export default Intro;
