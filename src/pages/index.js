import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import Carousel from 'react-bootstrap/Carousel';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Button from '../components/Button';

const Home = props => {
  const intro = props.data.intro;
  const site = props.data.site.siteMetadata;
  const oliviaHaas = props.data.oliviaHaas;
  const expertResults = props.data.expertResults;
  const greatPartnerships = props.data.greatPartnerships;
  const features = props.data.features.edges;
  const introImageClasses = `intro-image ${intro.frontmatter.intro_image_absolute && 'intro-image-absolute'} 
    ${intro.frontmatter.intro_image_hide_on_mobile && 'intro-image-hide-mobile'}`;

  return (
    <Layout bodyClass="page-home">
      <SEO title={site.title} />
      <Helmet>
        <meta
          name="description"
          content="15 East Creative's Website. We create graphics, layouts, and websites."
        />
      </Helmet>

      <div className="intro">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12 col-md-8 col-lg-10 order-2 order-md-1">
              <h1>{intro.frontmatter.header}</h1>
            </div>
            <div className="col-12 col-md-6 col-lg-7 order-2 order-md-1">
              <div dangerouslySetInnerHTML={{ __html: intro.html }} />
            </div>
            <img alt={intro.frontmatter.title} className={introImageClasses} src={intro.frontmatter.intro_image} />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12 col-md-9 col-lg-8 order-2 order-md-1">
              <h1>{expertResults.frontmatter.title}</h1>  
              <div dangerouslySetInnerHTML={{ __html: expertResults.html }} />
              <Button name={expertResults.frontmatter.buttonText} target={expertResults.frontmatter.target} />
            </div>
          </div>
        </div>
      </div>

      {features.length > 0 && (
        <div className="strip">
          <div className="container pt-6 pb-6 pt-md-10 pb-md-10">
            <div className="row justify-content-center">
              {features.map(({ node }) => (
                <div key={node.id} className="col-12 col-md-6 col-lg-4 mb-2">
                  <div className="feature">
                    {node.image && (
                      <div className="feature-image">
                        <img src={node.image} />
                      </div>
                    )}
                    <h2 className="feature-title">{node.title}</h2>
                    <div className="feature-content">{node.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="section">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12 col-md-9 col-lg-8 order-2 order-md-1">
              <h1>{greatPartnerships.frontmatter.title}</h1>  
              <div dangerouslySetInnerHTML={{ __html: greatPartnerships.html }} />
              <Button name={greatPartnerships.frontmatter.buttonText} target={greatPartnerships.frontmatter.target} />
            </div>
          </div>
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <h1 className="carousel-header">kind words.</h1>
          <p dangerouslySetInnerHTML={{ __html: oliviaHaas.html }}></p>
          <p>{oliviaHaas.frontmatter.source}</p>

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <h1 className="carousel-header">kind words.</h1>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <h1 className="carousel-header">kind words.</h1>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Layout>
  );
};

export const query = graphql`
  query {
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services\/.*/" } }
      sort: { fields: [frontmatter___weight], order: ASC }
      limit: 6
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            weight
            date(formatString: "DD MMMM YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    oliviaHaas: markdownRemark(frontmatter: {id: {eq: 1}}) {
    html
    frontmatter {
      source
    }
  }
    expertResults: markdownRemark(
      fileAbsolutePath: {regex: "/content/sections/expert-results.md/"}
    ) {
        html
        frontmatter {
          title
          buttonText
          target
        }
    }
    greatPartnerships: markdownRemark(
      fileAbsolutePath: {regex: "/content/sections/great-partnerships.md/"}
    ) {
        html
        frontmatter {
          title
          buttonText
          target
        }
    }
    intro: markdownRemark(
      fileAbsolutePath: {regex: "/content/index.md/"}
    ) {
        html
        frontmatter {
          image
          header
          intro_image
          intro_image_absolute
          intro_image_hide_on_mobile
          title
        }
    }
    features: allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Home;
