import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Figma from "../../Assets/Projects/FigmaLand.png"
import sch from "../../Assets/Projects/sch.png"
import dsk from "../../Assets/Projects/desk.png"
import crp from "../../Assets/Projects/crp.png"

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

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crp}
              isBlog={false}
              title="School site"
              description="A Crypto portfoilo project"
              ghLink="https://github.com/jeffreyxdev/web3"
              demoLink="https://coinx-snowy.vercel.app/"              
            />
          </Col> 

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

         {<Col md={4} className="project-card">
            <ProjectCard
              imgPath={dsk}
              isBlog={false}
              title="Desight foundation"
              description="A medical eye care organization based on empowering the community through health/ eye care"
              
              demoLink="https://desightfoundation.com.ng"
            />
          </Col> } 

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
