function Header() {
    return (
        <header className="header">
            <div className="header_inner">
                <a href="#intro" className="logo">
                    YUJIN
                </a>

                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#education">Education</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#connect">Connect</a>
                </nav>

                <a href="https://github.com/ujini7833-droid" className="github-link">
                    GitHub
                </a>
            </div>
        </header>
    )
}

export default Header