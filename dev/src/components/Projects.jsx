import PropTypes from "prop-types";

export default function Projects(props) {
    return (
        
// todo: update className with Chakra UI styling

        <div className="">
            <div className="">
                {props.projectsArray.map(project =>(
                    <div className="" key={project.img}>
                        {project.title}<br/>
                        <img src={project.img}/><br/>
                        <a href="{project.repo}">Repo</a><br/>
                        <a href="{project.deployed}">Deployed</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

