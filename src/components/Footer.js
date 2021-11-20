import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Button from "./Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = (props) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      footerData: markdownRemark(
        fileAbsolutePath: { regex: "/content/footer.md/" }
      ) {
        id
        html
        frontmatter {
          intro_image
        }
      }
      allFooterMenuJson {
        edges {
          node {
            weight
            url
            name
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className="footer">
      <div className="container">
        <Row>
          <Col className="footer-logo" md={1}>
            <Link to="/">
              <img
                className="footer-logo-image"
                src={data.footerData.frontmatter.intro_image}
              />
            </Link>
          </Col>

          <Col>
            <div className="row">
              <div className="col-12">
                <div className="footer-inner">
                  <Link to="/contact">CONTACT</Link>

                  <ul>
                    {data.allFooterMenuJson.edges.map(({ node }) => (
                      <li key={node.name}>
                        <Link to={node.url}>{node.name}</Link>
                      </li>
                    ))}
                    <li>
                      <Button target="/contact" buttonText="CONTACT" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Row className="footer-contact-info">
              <hr />
              <a href="tel:16107802023">
                <p>610.780.2023</p>
              </a>
              <a href="mailto:melodee.stephens@me.com">
                melodee.stephens@me.com
              </a>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
