import * as React from "react"
import Layout from "../components/layout"
import Hero01 from "../components/hero01"
import Service from "../components/service"
import FeaturedServices from "../components/featured-services"
import RecentProjects from "../components/recent-projects"
import ProjectThumbnail from "../components/project-thumbnail"
import Reviews from "../components/reviews"

function IndexPage(props) {
  return (
    <Layout>
      <Hero01
        heroHeading="Your Outdoor Space at it's Finest"
        heroDescription="From Beautiful Landscaping to Driveway Pavers and More - Cali’s Finest are Your Sacramento Landscaping Professionals"
        heroLinkTag="Explore Services"
        heroLink="page-2">
      </Hero01>
      <FeaturedServices>
        <Service
          serviceName="Lawn Care"
          serviceDescription="From beautiful landscaping to driveway pavers, create a whole new look for your lawn, garden or yard."
          serviceLink="page-2"
          serviceLinkTag="Learn More"
          serviceSRLinkTag="Featured Service Link">
        </Service>
        <Service
          serviceName="Spring Clean Up"
          serviceDescription="From beautiful landscaping to driveway pavers, create a whole new look for your lawn, garden or yard."
          serviceLink="page-2"
          serviceLinkTag="Learn More"
          serviceSRLinkTag="Featured Service Link">
        </Service>
        <Service
          serviceName="Snow Plowing"
          serviceDescription="From beautiful landscaping to driveway pavers, create a whole new look for your lawn, garden or yard."
          serviceLink="page-2"
          serviceLinkTag="Learn More"
          serviceSRLinkTag="Featured Service Link">
        </Service>
      </FeaturedServices>
      <RecentProjects
        recentProjectsHeading="Recent Projects"
        recentProjectsDescription="Update your outdoor space with Cali’s Finest Landscaping. Come to us with your challenges and see a world of beautiful landscaping and artistic style open up before your eyes. From simple driveway pavers to extensive lighting, water and other features, you’ll be delighted by the results."
        recentProjectsLinkTag="View More"
        recentProjectsLink="page-2"
      >
        <ProjectThumbnail></ProjectThumbnail>
        <ProjectThumbnail></ProjectThumbnail>
        <ProjectThumbnail></ProjectThumbnail>
        <ProjectThumbnail></ProjectThumbnail>
        <ProjectThumbnail></ProjectThumbnail>
        <ProjectThumbnail></ProjectThumbnail>
        <ProjectThumbnail></ProjectThumbnail>
        <ProjectThumbnail></ProjectThumbnail>
        <ProjectThumbnail></ProjectThumbnail>
        <ProjectThumbnail></ProjectThumbnail>
        <ProjectThumbnail></ProjectThumbnail>
        <ProjectThumbnail></ProjectThumbnail>
        <ProjectThumbnail></ProjectThumbnail>
        <ProjectThumbnail></ProjectThumbnail>
        <ProjectThumbnail></ProjectThumbnail>
        <ProjectThumbnail></ProjectThumbnail>
      </RecentProjects>

      <Reviews
        reviewsHeading="What Our Customers are Saying"
      ></Reviews>

    </Layout>

  )
}
export default IndexPage