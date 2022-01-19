import Image from "next/image";
import contactPic from "../public/images/contact.svg";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Contact() {
  return (
    <div className="contact-container">
      <Container className="contact-wrapper">
        <Row className="contact-row">
          <Col lg="4" md="4" s="12" xs="12">
            <div className="img-container">
              <Image src={contactPic} alt="contactPic" />
            </div>
          </Col>
          <Col lg="8" md="8" s="12" xs="12">
            <div className="contact-content">
              <label>
                I work as a frontend engineer/developer. I adore the Web
                platform and desire to help everyone make it better. And I feel
                myself quite fortunate to have the opportunity to make a
                livelihood doing so.
              </label>
              <br />
              <label>
                I have a Bachelor’s Degree, and have been doing what I do since
                2016. I have built Web applications/SPAs with focus on
                responsive design, accessibility, performance, and cutting-edge
                tech.
              </label>
              <br />
              <label>
                I hold myself to high standards, and bring more value for the
                investment you make in me. By default, everything I do is:
                standards-compliant, largely re-usable, cross-browser
                compatible, and optimized.
              </label>
              <br />
              <label>
                If you’re still with me, then I’d love to hear from you and
                learn more about what you’re working on.
              </label>
              <br />
              <label>
                Drop me a line at{" "}
                <strong>
                  <a href="mailto: praveen.kn.nagarajan@outlook.com">
                    praveen.kn.nagarajan@outlook.com
                  </a>
                </strong>
                . I look forward to hearing from you 😊.
              </label>
            </div>
            <div className="contact-content" style={{ display: "none" }}>
              <div className="input-group name-input">
                <label> Name </label>
                <input type="text" name="name" className="input-text"></input>
              </div>
              <div className="input-group email-input">
                <label> Email </label>
                <input type="email" name="email" className="input-text"></input>
              </div>
              <div className="input-group message-input">
                <label> Message </label>
                <textarea name="message" className="input-textarea"></textarea>
              </div>
              <div className="btn-container">
                <button class="submit-button state-0">
                  <span class="pre-state-msg"> Send </span>
                  <span class="current-state-msg hide">Sending...</span>
                  <span class="done-state-msg hide">Done!</span>
                </button>
              </div>
              {/* <Button
                as="input"
                type="button"
                value="Send"
                style={{ marginTop: "1rem" }}
              /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
