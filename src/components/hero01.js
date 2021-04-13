import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


function Hero01(props) {
    return (
        <section className="hero01">

            <div className="heroAreaImg">
                <StaticImage
                    placeholder="blurred"
                    src="../images/lawncare.jpeg"
                    alt="A dinosaur" 
                    style=""
                    layout="fullWidth">
                </StaticImage>
            </div>
            <div className="container mx-auto px-10 py-40 z-10 relative text-white text-center">
                <div className="flex flex-col items-center xl:px-60 lg:px-40">
                    <h1>{props.heroHeading}</h1>
                    <p className="text-lg">{props.heroDescription}</p>
                    <Link className="flex items-center  font-semibold bg-green-600 hover:bg-green-700 p-3 rounded-md" to={props.heroLink}>
                        {props.heroLinkTag}
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>
                        </Link>
                </div>
            </div>
        </section>
        
    
    )
}

export default Hero01