import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { graphql, useStaticQuery } from "gatsby";

const KindWords = (props) => {
  const data = useStaticQuery(graphql`
    query {
      testimonials: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/testimonials/*/" } }
      ) {
        nodes {
          frontmatter {
            role
            name
          }
          html
          id
        }
      }
    }
  `);

  const testimonials = data.testimonials;

  return (
    <Carousel>
      {testimonials.nodes.map((node) => (
        <Carousel.Item key={node.id}>
          <div className="quote-box">
            <h1 className="carousel-header">kind words.</h1>
            <div
              className="carousel-quote"
              dangerouslySetInnerHTML={{ __html: node.html }}
            ></div>
            <p className="carousel-quote-source">
              {node.frontmatter.name}&ensp;&ensp;|&ensp;&ensp;
              {node.frontmatter.role}
            </p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default KindWords;
