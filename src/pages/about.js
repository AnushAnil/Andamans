import * as React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data }) => (
  <Layout>
    <Seo title="About Gatsby Bootsrap 5 starter" />
    <div className="container  my-5">
      <div className="container">
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
