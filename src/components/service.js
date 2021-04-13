import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


function Service(props) {
    return (
        <div className="shadow rounded-md md:w-1/3 flex flex-col bg-white">
          <div className="image-wrapper">
              <StaticImage
              placeholder="blurred"
              src="../images/lawncare.jpeg"
              alt="A dinosaur"
              layout="fullWidth"
              objectPosition="center center"
              objectFit="cover"
            />
          </div>
        <div className="p-5  flex flex-grow flex-col justify-between border-solid border-t-4 border-green-700">
          <h3><Link to={props.serviceLink}>{props.serviceName}</Link></h3>
          <p>{props.serviceDescription}</p>
          <Link className="flex justify-center bg-green-600 hover:bg-green-700  py-3 rounded-md" to={props.serviceLink}>
            {props.serviceLinkTag}
            <span class="sr-only">{props.serviceSRLinkTag}</span>
          </Link>
        </div>
      </div>
    )
}

export default Service