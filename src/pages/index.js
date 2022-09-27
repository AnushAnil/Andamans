import * as React from "react"
import { graphql, Link } from "gatsby"

import Img from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as Styles from "../styles/css/Index.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <section classNameName="text-center">
      <Img fluid={data.file.childImageSharp.fluid} />
      <h3 style={{ paddingTop: "1rem" }}>Places to visit</h3>
      <div classNameName="cards">
        <div className="card"></div>
      </div>
      {/* <div classNameName="row py-lg-5">
        <div classNameName="col-lg-6 col-md-8 mx-auto">
          <h1 classNameName="fw-light">Hello world ! </h1>
          <p classNameName="lead text-muted">
            {" "}
            Welcome to this Boostrap 5 Gatsby Starter
          </p>
          <StaticImage src="../images/city.jpg" style={{ width: "90vw" }} />
        </div>
      </div>
      <div classNameName="row">
        <Link to="/about/" classNameName="btn btn-primary my-2">
          About
        </Link>
        <Link to="/page-2/" classNameName="btn btn-secondary my-2">
          Go to page 2
        </Link>
      </div> */}
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query BannerandBanner {
    file(relativePath: { eq: "city.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
