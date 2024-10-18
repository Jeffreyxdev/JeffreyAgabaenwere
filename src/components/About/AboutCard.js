import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Agabaenwere Jeffrey </span>
            from <span className="purple"> Port Harcourt, Nigeria.</span>
            <br />
           
            <br />
            I have completed Diploma Front-end Development at SkillAhead
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> BasketBall
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 152)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jeffrey</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
