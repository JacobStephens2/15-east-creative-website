import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import ButtonExternal from "../components/ButtonExternal";
import Col from "react-bootstrap/Col";

const About = (props) => {
  const team = props.data.team.edges;
  const { intro } = props.data;
  const introImageClasses = `intro-image ${
    intro.frontmatter.intro_image_absolute && "intro-image-absolute"
  } ${
    intro.frontmatter.intro_image_hide_on_mobile && "intro-image-hide-mobile"
  }`;

  return (
    <Layout bodyClass="page-teams">
      <SEO title="About" />

      <div className="intro">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12 col-md-7 col-lg-6 order-2 order-md-1">
              <div dangerouslySetInnerHTML={{ __html: intro.html }} />
            </div>
            {intro.frontmatter.intro_image && (
              <div className="col-12 col-md-5 col-lg-6 order-1 order-md-2 position-relative">
                <img
                  alt={intro.frontmatter.title}
                  className={introImageClasses}
                  src={intro.frontmatter.intro_image}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {team
        .filter((edge) => edge.node.frontmatter.promoted)
        .map(({ node }) => (
          <div key={node.id} className="col-12 col-md-12">
            <div className="team team-summary team-summary-large">
              <Col sm={12} md={6} className="team-image">
                {node.frontmatter.image && (
                  <img
                    alt={`photo of ${node.frontmatter.title}`}
                    className="img-fluid mb-2 profile-image"
                    src={node.frontmatter.image}
                  />
                )}
              </Col>
              <Col sm={12} md={6} className="team-meta">
                <h2
                  className="team-name"
                  dangerouslySetInnerHTML={{ __html: node.frontmatter.title }}
                ></h2>
                <p className="team-description">{node.frontmatter.jobtitle}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: node.html }}
                  className="team-content"
                ></div>
                <ButtonExternal
                  buttonText={`Email ${node.frontmatter.name}`}
                  target={`mailto:${node.frontmatter.email}`}
                ></ButtonExternal>
              </Col>
            </div>
          </div>
        ))}
    </Layout>
  );
};

export const query = graphql`
  query TeamQuery {
    team: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/team/.*/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          html
          frontmatter {
            title
            promoted
            image
            jobtitle
            name
            email
          }
        }
      }
    }
    intro: markdownRemark(fileAbsolutePath: { regex: "/(team.md)/" }) {
      html
      frontmatter {
        image
        intro_image
        intro_image_absolute
        intro_image_hide_on_mobile
        title
      }
    }
  }
`;

export default About;
