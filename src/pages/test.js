import React from "react"
import { graphql } from "gatsby"

const HomePage = ({ data }) => {
  return (
    <div>
      {
      data.allMarkdownRemark.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.one.name}</h2>
          <h3>{node.frontmatter.one.role}</h3>
          <p>{node.frontmatter.one.quote}</p>
        </article>
      ))
      }
    </div>
  )
}

export const query = graphql`
query TestimonialsTwo {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/testimonials/*/"}}) {
    nodes {
      id
      html
      frontmatter {
        one {
          name
          role
          quote
        }
        two {
          name
          role
          quote
        }
      }
    }
  }
}
`
export default HomePage