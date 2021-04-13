import * as React from "react"
import { Link } from "gatsby"


function RecentProjects(props) {
    return (
        <section className="recent-projects">
            <div className="container mx-auto px-10 py-10">
                <div className="flex flex-col justify-between">
                    <div className="text-center xl:px-60 lg:px-40">
                        <h2>{props.recentProjectsHeading}</h2>
                        <p className="text-lg">{props.recentProjectsDescription}</p>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center gap-5">
                    {props.children}
                     </div>
                     <div className="mx-auto mt-10">
                    <Link className="inline-flex items-center  font-semibold bg-gray-200 hover:bg-gray-300 p-3 rounded-md" to={props.recentProjectsLink}>{props.recentProjectsLinkTag}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>
                    </Link>
                    </div>
                </div>
             </div>
        </section>
        
        
    
    )
}

export default RecentProjects