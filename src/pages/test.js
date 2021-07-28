import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/testimonials/*/"}}) {
      nodes {
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
        id
      }
    }
  }
`

export default ComponentName

