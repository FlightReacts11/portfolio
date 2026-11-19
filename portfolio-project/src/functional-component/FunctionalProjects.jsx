

function FunctionalProjects({codeLink, projectLink, image, projectName, description}) {
    return (
        <div className="functional-container">
            <div className="project-box">
                <img className="project-image"src={image}></img>
                </div>

                <div className="text-wrapper">
            <h2 className="project-name">{projectName}</h2>
            <h2 className="project-name description">{description}</h2>

            <div className="link-wrapper">
            <h3 className="project-link">
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
            Project Link
            </a>
            </h3>
            <h3 className="code-link">
                <a href={codeLink} target="_blank" rel="noopener noreferrer">
            Code Link
            </a>
            </h3>
            </div>
            </div>
        </div>
    )
}

export default FunctionalProjects