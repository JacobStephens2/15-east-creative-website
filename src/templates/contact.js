import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import Call from "../components/Call";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contact = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  return (
    <Layout bodyClass="page-default-single">
      <div className="intro">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12 col-lg-10 order-2 order-md-1">
              <h1 dangerouslySetInnerHTML={{ __html: title }} />
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6 pb-md-10">
        <div className="row justify-content-start">
          <div className="col-12 col-md-10">
            <Row>
              <Col lg={6}>
                <div
                  className="content mt-4"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <Call showButton={false} />
              </Col>
              <Col lg={6}>
                <ContactForm />
              </Col>
            </Row>
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
        path
      }
      fields {
        slug
      }
      html
    }
  }
`;

export default Contact;
