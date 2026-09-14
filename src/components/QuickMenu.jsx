import './Quickmenu.css'

function QuickMenu({ isOpen, onClose }) {
    const menuItems = [
        { number: '01', name: 'About', id: 'about' },
        { number: '02', name: 'Experience', id: 'experience' },
        { number: '03', name: 'Education', id: 'education' },
        { number: '04', name: 'Skills', id: 'skills' },
        { number: '05', name: 'Projects', id: 'projects' },
    ]

    const handleClick = (id) => {
        const target = document.getElementById(id)
        target?.scrollIntoView({ behavior: 'smooth' })
        onClose()
    }

    return (
        <>
        <div
        className={`menu_overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        />

        <aside className={`quick_menu ${isOpen ? 'open' : ''}`}>

        <button
        className="close_button"
        onClick={onClose}
        aria-label="Close Menu"
        >
            <span></span>
            <span></span>
        </button>

        <nav className="quick_menu_nav">
            {menuItems.map((item) => (
            <button
                key={item.id}
                onClick={() => handleClick(item.id)}
            >
                <span className="menu_number">{item.number}.</span>
                <span className="menu_name">{item.name}</span>
            </button>
            ))}
        </nav>

        </aside>
        </>
    )
}

export default QuickMenu;
