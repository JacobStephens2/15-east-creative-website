import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const Portfolio = (props) => {
  const services = props.data.services.edges;
  const { intro } = props.data;
  const introImageClasses = `intro-image ${
    intro.frontmatter.intro_image_absolute && "intro-image-absolute"
  } ${
    intro.frontmatter.intro_image_hide_on_mobile && "intro-image-hide-mobile"
  }`;

  return (
    <Layout bodyClass="page-services">
      <SEO title="Services" />

      <div className="intro">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12 col-lg-10 order-2 order-md-1">
              <div dangerouslySetInnerHTML={{ __html: intro.html }} />
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio-samples" className="container pb-6">
        <div className="row">
          {services.map((edge) => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-6 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                  <div className="portfolio-image-container">
                    <Link to={edge.node.fields.slug}>
                      <img
                        alt={`Photo of ${edge.node.frontmatter.title}`}
                        className="img-fluid mb-2 portfolio-main-image"
                        src={edge.node.frontmatter.mainImage}
                      />
                    </Link>
                  </div>
                  <h3>
                    {edge.node.frontmatter.type}
                    <span className="status">
                      {edge.node.frontmatter.status}
                    </span>
                  </h3>
                  <Link to={edge.node.fields.slug}>
                    <h2>
                      {edge.node.frontmatter.author ? (
                        edge.node.frontmatter.author + " | "
                      ) : (
                        <></>
                      )}
                      {edge.node.frontmatter.title}
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ServicesQuery {
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/portfolio/.*/" } }
      sort: { fields: [frontmatter___weight], order: ASC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            type
            author
            status
            mainImage
          }
        }
      }
    }
    intro: markdownRemark(fileAbsolutePath: { regex: "/(portfolio.md)/" }) {
      html
      frontmatter {
        title
        image
        intro_image
        intro_image_absolute
        intro_image_hide_on_mobile
      }
    }
  }
`;

export default Portfolio;
