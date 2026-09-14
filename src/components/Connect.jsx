import './Connect.css'

const Connect = () => {
    return (
        <section id="connect" className="connect section-reveal">
            <div className="connect-inner">

                <div className="connect-content">
                    <p className="connect-message scroll-reveal">
                        더 궁금하신 점이 있으면<br />
                        <span>편하게 연락해 주세요!</span>
                    </p>

                    <div className="connect-links scroll-reveal scroll-reveal--delay">
                        <a href="mailto:ujini7833@gmail.com">
                            <span className="connect-link-label">EMAIL</span>
                            <span className="connect-link-value">ujini7833@gmail.com</span>
                            <span className="connect-arrow" aria-hidden="true">↗</span>
                        </a>
                        <a href="https://github.com/ujini7833-droid" target="_blank" rel="noopener noreferrer">
                            <span className="connect-link-label">GITHUB</span>
                            <span className="connect-link-value">@ujini7833-droid</span>
                            <span className="connect-arrow" aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>

                <footer className="connect-footer scroll-reveal scroll-reveal--delay">© 2026 YUJIN BAE</footer>
            </div>
        </section>
    )
}

export default Connect;
