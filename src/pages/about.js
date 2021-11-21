import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import ButtonExternal from "../components/ButtonExternal";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import KindWords from "../components/KindWords";
import Button from "../components/Button";

const About = (props) => {
  const team = props.data.team.edges;
  const expertPartnerships = props.data.expertPartnerships;
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
            <div className="col-12 col-lg-7 order-2 order-md-1">
              <div dangerouslySetInnerHTML={{ __html: intro.html }} />
            </div>
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
        <div className="capabilities-container">
          <div>
            <h3>Print</h3>
            <ul style={{ columns: `2` }}>
              <li>Photography/Art Books</li>
              <li>Catalogs</li>
              <li>Magazines</li>
              <li>Print Collateral</li>
            </ul>
          </div>
          <div>
            <h3>Web&ensp;|&ensp;Digital</h3>
            <ul style={{ columns: `2` }}>
              <li>Website Design</li>
              <li>WordPress</li>
              <li>Website Updates</li>
              <li>Performance, Accessibility, and Efficiency</li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="section expert-partnerships-background">
        <div className="container height">
          <div className="row justify-content-start">
            <div className="col-12 order-2 order-md-1">
              <h1>{expertPartnerships.frontmatter.title}</h1>
              <div
                className="col-lg-9"
                dangerouslySetInnerHTML={{ __html: expertPartnerships.html }}
              />
              <Button
                target={expertPartnerships.frontmatter.target}
                buttonText={expertPartnerships.frontmatter.buttonText}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="gold-bar">
        <Container id="client-list" className="section-container">
          <h2>select client list</h2>
          <p>
            &nbsp;The&nbsp;Agnes&nbsp;Irwin&nbsp;&nbsp;School&ensp;&ensp;|&ensp;&ensp;Archmere&nbsp;&nbsp;Academy&ensp;&ensp;|&ensp;&ensp;Biomass&nbsp;&nbsp;Controls&ensp;&ensp;|&ensp;&ensp;Brandywine&nbsp;Oak&nbsp;&nbsp;Wealth&ensp;&ensp;|&ensp;&ensp;Brilliant&nbsp;&nbsp;Graphics&ensp;&ensp;|&ensp;&ensp;
            <i>Chester&nbsp;County&nbsp;&nbsp;Life</i>
            ,&nbsp;Superior&nbsp;&nbsp;Publications&ensp;&ensp;|&ensp;&ensp;DVFriends&nbsp;School&ensp;&ensp;|&ensp;&ensp;French&nbsp;&&nbsp;Pickering&nbsp;Creeks&nbsp;Conservation&nbsp;&nbsp;Trust&ensp;&ensp;|&ensp;&ensp;Gallery&nbsp;47,&nbsp;Perfume&nbsp;Bottle&nbsp;Auction&ensp;&ensp;|&ensp;&ensp;Grand&nbsp;&nbsp;American&nbsp;Tours&ensp;&ensp;|&ensp;&ensp;Hartzell’s&nbsp;&nbsp;Auction&nbsp;Gallery&ensp;&ensp;|&ensp;&ensp;Historic&nbsp;&nbsp;Yellow&nbsp;Springs&ensp;&ensp;|&ensp;&ensp;Kimberton&nbsp;&nbsp;Waldorf&nbsp;School&ensp;&ensp;|&ensp;&ensp;Montgomery&nbsp;&nbsp;School&ensp;&ensp;|&ensp;&ensp;National&nbsp;Coalition&nbsp;&nbsp;of&nbsp;Girls’&nbsp;Schools&ensp;&ensp;|&ensp;&ensp;Penn&nbsp;Color&ensp;&ensp;|&ensp;&ensp;Professional&nbsp;Baseball&nbsp;Team,&nbsp;Philadelphia&ensp;&ensp;|&ensp;&ensp;Please&nbsp;&nbsp;Touch&nbsp;Museum&ensp;&ensp;|&ensp;&ensp;Sacred&nbsp;Heart&nbsp;&nbsp;Academy&ensp;&ensp;|&ensp;&ensp;Somerville&nbsp;Manning&nbsp;&nbsp;Gallery&ensp;&ensp;|&ensp;&ensp;Stoltzfus&nbsp;&nbsp;Enterprises&ensp;&ensp;|&ensp;&ensp;St.&nbsp;Peter’s&nbsp;&nbsp;School&ensp;&ensp;|&ensp;&ensp;StraighterLine&ensp;&ensp;|&ensp;&ensp;The&nbsp;Nature&nbsp;&nbsp;Conservancy&ensp;&ensp;|&ensp;&ensp;United&nbsp;States&nbsp;Tennis&nbsp;Association,&nbsp;Middle&nbsp;States&ensp;&ensp;|&ensp;&ensp;Wheaton&nbsp;Academy
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
      sort: { fields: [frontmatter___weight], order: ASC }
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
    expertPartnerships: markdownRemark(
      fileAbsolutePath: { regex: "/content/sections/expert-partnerships.md/" }
    ) {
      html
      frontmatter {
        title
        buttonText
        target
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
