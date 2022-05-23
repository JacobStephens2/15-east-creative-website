const sendgrid = require("@sendgrid/mail");
//Your API Key from Sendgrid
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
const message = {
  //Your authorized email from SendGrid
  from: process.env.SENDGRID_AUTHORIZED_EMAIL,
};

export default function handler(req, res) {
  try {
    if (req.method !== "POST") {
      res.json({ message: "Try a POST!" });
    }

    if (req.body) {
      var content = `
Name: ${req.body.name} ${req.body.last_name}
Business Name: ${req.body.business_name}
Location: ${req.body.location}
Email: ${req.body.email}
Help desired:
  ${req.body.checkbox_photography},
  ${req.body.checkbox_catalog},
  ${req.body.checkbox_magazine},
  ${req.body.checkbox_printcollateral},
  ${req.body.checkbox_web},
  ${req.body.checkbox_other}
How they heard about 15 East: ${req.body.source}
About their project: 

${req.body.message}`;

      var messagehtml = req.body.message.replace(/\r/gm, "<br><br>");

      var contentHTML = `
  <p>Name: ${req.body.name} ${req.body.last_name}</p>
  <p>Business Name: ${req.body.business_name}</p>
  <p>Location: ${req.body.location}</p>
  <p>Help desired:</p>
    <ul>
      <li>${req.body.checkbox_photography}</li>
      <li>${req.body.checkbox_catalog}</li>
      <li>${req.body.checkbox_magazine}</li>
      <li>${req.body.checkbox_printcollateral}</li>
      <li>${req.body.checkbox_web}</li>
      <li>${req.body.checkbox_other}</li>
    </ul>
  <p>Email: ${req.body.email}</p>
  <p>How they heard about 15 East: ${req.body.source}
  <p>About their project:</p>
  <div>${messagehtml}</div>
`;
      message.to = process.env.SENDGRID_TARGET_EMAIL;
      message.subject = `Message from ${req.body.name}`;
      message.reply_to = req.body.email;
      message.text = content;
      message.html = contentHTML;
    }

    function checkIfSpam(text) {
      const one = new RegExp('Buy Here');
      const two = new RegExp('https://');
      if (one.test(text)) {
        // if a match is found, return true,
        // preventing an email from getting sent
        return true;

      } else if (two.test(text)) {

        return true;

      } else {
        // return false if no matches are found,
        // resulting in an email getting sent
        return false;
      }
    }

    if (checkIfSpam(messagehtml)) {
      // if there is a match,
      // do not send an email
    } else {
      // send an email
      return sendgrid.send(message).then(
        () => {
          res.status(200).redirect("/message-sent");
        },
        (error) => {
          console.error(error);
          if (error.response) {
            return res.status(500).json({
              error: error.response,
            });
          }
        }
      );
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "There was an error", error: err });
  }
}
