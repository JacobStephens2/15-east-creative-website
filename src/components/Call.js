import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Call = (props) => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      contactJson {
        phone
        email
        contact_button_link
      }
    }
  `);
  const phoneLink = "tel:" + data.contactJson.phone;
  return (
    <div>
      <div className="call-box-top">
        <h3>CONTACT</h3>
        {data.contactJson.phone && (
          <div className="call-phone">
            <a href={phoneLink}>{data.contactJson.phone}</a>{" "}
          </div>
        )}
        {data.contactJson.email && (
          <div className="call-email">
            <a href={`mailto:${data.contactJson.email}`}>
              {data.contactJson.email}
            </a>
          </div>
        )}
      </div>
      {props.showButton && (
        <div className="call-box-bottom">
          <a href={data.contactJson.contact_button_link} className="button">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Call;
