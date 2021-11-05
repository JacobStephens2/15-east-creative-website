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

      <div id="portfolio-samples" className="container pb-6">
        <div className="row">
          {services.map((edge) => (
            <div key={edge.node.id} className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                  <Link to={edge.node.fields.slug}>
                    <img
                      alt={`Photo of ${edge.node.frontmatter.title}`}
                      className="img-fluid mb-2 portfolio-main-image"
                      src={edge.node.frontmatter.mainImage}
                    />
                  </Link>
                  <h3>
                    {edge.node.frontmatter.type}
                    <span className="status">
                      {edge.node.frontmatter.status}
                    </span>
                  </h3>
                  <Link to={edge.node.fields.slug}>
                    <h2>{edge.node.frontmatter.title}</h2>
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
