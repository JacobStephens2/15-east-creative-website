import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Service = ({ data }) => {
  const { html } = data.markdownRemark;
  var pages = data.markdownRemark.frontmatter.pages + " pages ";
  var author = data.markdownRemark.frontmatter.author;
  var title = data.markdownRemark.frontmatter.title;
  var spacer = "&emsp;|&emsp;";

  return (
    <Layout bodyClass="page-services-single">
      <div className="container pb-6 pt-6 pt-md-10 pb-md-10 ">
        <div className="service service-single">
          <h1 className="title">
            {data.markdownRemark.frontmatter.type}
            <span className="title-comment">
              &ensp;
              {data.markdownRemark.frontmatter.titleComment}
            </span>
          </h1>

          {data.markdownRemark.frontmatter.author != null && (
            <>
              <h2
                className="sample-details inline"
                dangerouslySetInnerHTML={{
                  __html: author,
                }}
              ></h2>
              <span dangerouslySetInnerHTML={{ __html: spacer }}></span>
            </>
          )}

          {data.markdownRemark.frontmatter.title != null && (
            <h2
              className="sample-details inline"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            ></h2>
          )}

          {data.markdownRemark.frontmatter.pages != null && (
            <>
              <span dangerouslySetInnerHTML={{ __html: spacer }}></span>
              <h2
                className="sample-details inline"
                dangerouslySetInnerHTML={{
                  __html: pages,
                }}
              ></h2>
            </>
          )}
          <h2 className="sample-details inline">
            {data.markdownRemark.frontmatter.pageComment ? (
              data.markdownRemark.frontmatter.pageComment
            ) : (
              <></>
            )}
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

            {data.markdownRemark.frontmatter.image5 ? (
              <div className="portfolio-image-container">
                <img
                  alt={`Photo of ${data.markdownRemark.frontmatter.title}`}
                  className="img-fluid mb-2 portfolio-main-image"
                  src={data.markdownRemark.frontmatter.image5}
                />
              </div>
            ) : (
              <></>
            )}

            {data.markdownRemark.frontmatter.image6 ? (
              <div className="portfolio-image-container">
                <img
                  alt={`Photo of ${data.markdownRemark.frontmatter.title}`}
                  className="img-fluid mb-2 portfolio-main-image"
                  src={data.markdownRemark.frontmatter.image6}
                />
              </div>
            ) : (
              <></>
            )}
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
        status
        mainImage
        image2
        image3
        image4
        image5
        image6
        type
        pages
        pageComment
        author
      }
      fields {
        slug
      }
      html
    }
  }
`;

export default Service;
