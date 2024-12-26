import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="font mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Agabaenwere Jeffrey </span>
            from <span className="purple"> Port Harcourt, Nigeria.</span>
            <br />
           
            <br />
            I am a Software Engineer,A CEO, A trader, A Designer Proficient in many skills,I have completed Diploma of Software Development at SkillAhead.
            I'm building my dreams and maybe yours too send a dm.
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
            <li className="about-activity">
              <ImPointRight /> Content Creating
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new skills
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
