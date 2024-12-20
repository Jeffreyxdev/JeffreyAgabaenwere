import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Figma from "../../Assets/Projects/FigmaLand.png"
import sch from "../../Assets/Projects/sch.png"

import sub from "../../Assets/Projects/Sub app.png"
function Projects() {
  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Figma}
              isBlog={false}
              title="Figma Land"
              description="A project template with authentication and js Logics "
              ghLink="https://github.com/Jeffreyxdev/FigmaLand-demo"
              demoLink="https://figma-land-demo.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Blog web app"
              description="My personal blog page build with react.js, Tailwind Css and Firebase which takes content from the database and post on the frontend. this was a practice on my Firebase skill"
              ghLink="https://github.com/Jeffreyxdev/blog-webapp"
              //demoLink="/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={school}
              isBlog={false}
              title="School site"
              description="A project with firebase with a fectch and get form fully functional"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sub}
              isBlog={false}
              title="Sub web app"
              description="Used firebase, react and tailwind css to build  a demo hosting site for hosting websites  "
              ghLink="https://github.com/Jeffreyxdev/Subscription-webapp/"
              demoLink="https://subscription-eta-six.vercel.app/"
            />
          </Col>

          {/* {<Col md={4} className="project-card">
            <ProjectCard
              imgPath={}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/Jeffreyxdev/FigmaLand-demo"
              demoLink="https://fiverr-clone-tau-sage.vercel.app/"
            />
          </Col> } */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sch}
              isBlog={false}
              title="Hotel site land"
              description="hotel landing page for a hotel in nigeria
              "
              ghLink="https://github.com/Jeffreyxdev/hotel-landing.page"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
