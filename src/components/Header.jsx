import './Header.css'

function Header({ onMenuClick }) {
    return (
        <header className="header">
            <div className="header-inner">
                <a href="#intro" className="logo">
                    YUJIN
                </a>

                <button
                className="menu-button"
                onClick={onMenuClick}
                aria-label="Open menu"
                >
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}

export default Header
