import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Service = ({ data }) => {
  const { html } = data.markdownRemark;
  return (
    <Layout bodyClass="page-services-single">
      <div className="container pb-6 pt-6 pt-md-10 pb-md-10">
        <div className="row justify-content-start">
          <div className="col-12 col-md-8">
            <div className="service service-single">
              <h1 className="title">{data.markdownRemark.frontmatter.title}</h1>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <img
                alt={`Photo of ${data.markdownRemark.frontmatter.title}`}
                className="img-fluid mb-2 portfolio-main-image"
                src={data.markdownRemark.frontmatter.mainImage}
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
      }
      fields {
        slug
      }
      html
    }
  }
`;

export default Service;
