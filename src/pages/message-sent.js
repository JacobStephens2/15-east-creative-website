import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";

const MessageSent = (props) => {
  return (
    <Layout bodyClass="page-teams">
      <SEO title="Message Sent" />

      <Container id="capabilities" className="section-container">
        <h2>message sent</h2>
      </Container>
    </Layout>
  );
};

export default MessageSent;
