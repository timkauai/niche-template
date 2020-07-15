import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query logoNavImg {
      logo: file(relativePath: { eq: "logo.png" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1
          style={{
            margin: 0,
          }}
        >
          <Link
            to="/"
            className="title"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            <Img className="logo" fluid={data.logo.childImageSharp.fluid} />
            The Surfers Blog{" "}
          </Link>{" "}
        </h1>{" "}
      </div>{" "}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
