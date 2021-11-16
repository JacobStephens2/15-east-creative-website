import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Service = ({ data }) => {
  const { html } = data.markdownRemark;
  return (
    <Layout bodyClass="page-services-single">
      <div className="container pb-6 pt-6 pt-md-10 pb-md-10 ">
        <div className="service service-single">
          <h1 className="title">{data.markdownRemark.frontmatter.type}</h1>
          <h2>
            {data.markdownRemark.frontmatter.title}
            {data.markdownRemark.frontmatter.pages > 0 &&
              " | " + data.markdownRemark.frontmatter.pages + " pages"}
          </h2>
          <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
          <div className="portfolio-sample">
            <div className="portfolio-image-container">
              <img
                alt={`Photo of ${data.markdownRemark.frontmatter.title}`}
                className="img-fluid mb-2 portfolio-main-image"
                src={data.markdownRemark.frontmatter.mainImage}
              />
            </div>
            <div className="portfolio-image-container">
              <img
                alt={`Photo of ${data.markdownRemark.frontmatter.title}`}
                className="img-fluid mb-2 portfolio-main-image"
                src={data.markdownRemark.frontmatter.image2}
              />
            </div>
            <div className="portfolio-image-container">
              <img
                alt={`Photo of ${data.markdownRemark.frontmatter.title}`}
                className="img-fluid mb-2 portfolio-main-image"
                src={data.markdownRemark.frontmatter.image3}
              />
            </div>
            <div className="portfolio-image-container">
              <img
                alt={`Photo of ${data.markdownRemark.frontmatter.title}`}
                className="img-fluid mb-2 portfolio-main-image"
                src={data.markdownRemark.frontmatter.image4}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        mainImage
        image2
        image3
        image4
        type
        pages
      }
      fields {
        slug
      }
      html
    }
  }
`;

export default Service;
