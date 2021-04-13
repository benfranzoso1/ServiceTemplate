import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


function ProjectThumbnail(props) {
    return (
        <div className="project-thumbnail shadow rounded-md">
        <StaticImage
        placeholder="blurred"
                    src="../images/lawncare.jpeg"
                    alt="A dinosaur" 
                    style=""
                    layout="fullWidth">
        </StaticImage>
    </div>
    )
}

export default ProjectThumbnail