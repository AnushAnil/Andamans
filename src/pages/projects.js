import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/css/Projects.module.css"
import Img from "gatsby-image"

export default function Projects({ data }) {
  const projectData = data.projects.nodes
  const contactData = data.contacts.siteMetadata.contact
  return (
    <Layout>
      <Seo title="Projects" />
      <h1 className={styles.h1}>Portfolio</h1>
      <h3>My projects</h3>
      <div className={styles.project}>
        {projectData.map(project => (
          <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
            <div className={styles.currproject}>
              <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
              <h3>{project.frontmatter.title}</h3>
              <h5>Tech stack: {project.frontmatter.stack}</h5>
            </div>
          </Link>
        ))}
      </div>
      <div>Liked my work? Share your response at {contactData}</div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: DESC }
    ) {
      nodes {
        frontmatter {
          stack
          slug
          title
          thumb {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contacts: site {
      siteMetadata {
        contact
      }
    }
  }
`
