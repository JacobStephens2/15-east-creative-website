import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Button from "./Button";

const Footer = (props) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
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
        <div className="row">
          <div className="col-12">
            <div className="footer-inner">
              <Link to="/">Home</Link>

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
      </div>
    </div>
  );
};

export default Footer;
