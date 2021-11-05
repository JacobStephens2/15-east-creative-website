import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import ButtonExternal from "../components/ButtonExternal";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import KindWords from "../components/KindWords";

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

      <Container id="capabilities" className="section-container">
        <h2>capabilities</h2>
        <div style={{ display: `flex` }}>
          <div>
            <h3>Print</h3>
            <ul style={{ columns: `2` }}>
              <li>Photography/Art Books</li>
              <li>Catalogs</li>
              <li>Magazines</li>
              <li>Print Collateral</li>
              <li>Product Packaging</li>
              <li>Brand Identity</li>
            </ul>
          </div>
          <div>
            <h3>Web&ensp;&ensp;|&ensp;&ensp;Digital</h3>
            <ul style={{ columns: `2` }}>
              <li>Website Design</li>
              <li>WordPress</li>
              <li>Efficiency Improvements</li>
              <li>Web Hosting</li>
              <li>Website Refresh</li>
              <li>Performance, Accessibility, and SEO</li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="grey-bar">
        <Container className="section-container">
          <h2>select client list</h2>
          <p>
            The Agnes Irwin School&ensp;&ensp;|&ensp;&ensp;Archmere
            Academy&ensp;&ensp;|&ensp;&ensp;Biomass
            Controls&ensp;&ensp;|&ensp;&ensp;Brandywine Oak
            Wealth&ensp;&ensp;|&ensp;&ensp;Brilliant
            Graphics&ensp;&ensp;|&ensp;&ensp;Chester County Life, Superior
            Publications&ensp;&ensp;|&ensp;&ensp;Delaware Valley Friends
            School&ensp;&ensp;|&ensp;&ensp;Esperanza
            College&ensp;&ensp;|&ensp;&ensp;French & Pickering Creeks
            Conservation Trust&ensp;&ensp;|&ensp;&ensp;Gallery 47, Perfume
            Bottle Auction&ensp;&ensp;|&ensp;&ensp;Grand American
            Tours&ensp;&ensp;|&ensp;&ensp;Hartzell’s Auction
            Gallery&ensp;&ensp;|&ensp;&ensp;Historic Yellow
            Springs&ensp;&ensp;|&ensp;&ensp;Kimberton Waldorf
            School&ensp;&ensp;|&ensp;&ensp;Montgomery
            School&ensp;&ensp;|&ensp;&ensp;National Coalition of Girls’
            Schools&ensp;&ensp;|&ensp;&ensp;Professional Baseball Team,
            Philadelphia&ensp;&ensp;|&ensp;&ensp;Please Touch
            Museum&ensp;&ensp;|&ensp;&ensp;Sacred Heart
            Academy&ensp;&ensp;|&ensp;&ensp;Somerville Manning
            Gallery&ensp;&ensp;|&ensp;&ensp;Stoltzfus
            Enterprises&ensp;&ensp;|&ensp;&ensp;St. Peter’s
            School&ensp;&ensp;|&ensp;&ensp;The Nature
            Conservancy&ensp;&ensp;|&ensp;&ensp;United States Tennis
            Association, Middle States&ensp;&ensp;|&ensp;&ensp;Wheaton Academy
          </p>
        </Container>
      </div>

      <KindWords />
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
