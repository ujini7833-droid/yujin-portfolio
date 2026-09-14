import './Skills.css'

function Skills() {
    const skillGroups = [
        {
            number: '01',
            title: 'Language',
            skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Java'],
        },
        {
            number: '02',
            title: 'Frontend',
            skills: ['React', 'React Native', 'Vue', 'Redux', 'Axios', 'Zustand'],
        },
        {
            number: '03',
            title: 'Tools',
            skills: ['GitHub', 'Git', 'Notion', 'Figma'],
        },
    ]

    return (
        <section id="skills" className="skills">
            <div className="skills-inner">
                <header className="skills-header">
                    <p className="skills-number">04</p>
                    <h2>Skills<span>.</span></h2>
                </header>

                <div className="skills-list">
                    {skillGroups.map((group) => (
                        <article className="skills-group" key={group.title}>
                            <div className="skills-group-heading">
                                <span>{group.number}</span>
                                <h3>{group.title}</h3>
                            </div>

                            <div className="skills-tags">
                                {group.skills.map((skill) => (
                                    <span key={skill}>{skill}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
