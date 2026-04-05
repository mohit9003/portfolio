import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import chatapp from "../../Assets/Projects/chatapp.png";
import taskmanager from "../../Assets/Projects/taskmanager.png";
import blog from "../../Assets/Projects/blog.png";
import jobportal from "../../Assets/Projects/jobportal.png";

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
          
          {/* Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce Website"
              description="A full stack e-commerce web application built using MERN stack with features like user authentication, product listing, cart management, and secure checkout. Includes admin dashboard and payment integration."
              ghLink="https://github.com/yourusername/ecommerce-mern"
              demoLink="https://your-ecommerce.vercel.app"
            />
          </Col>

          {/* Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="Real-Time Chat Application"
              description="A real-time chat application built using React, Node.js, Express, and Socket.io. Supports private messaging, group chats, and real-time notifications."
              ghLink="https://github.com/yourusername/chat-app"
              demoLink="https://your-chat-app.vercel.app"
            />
          </Col>

          {/* Project 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskmanager}
              isBlog={false}
              title="Task Management System"
              description="A full stack task manager where users can create, update, and delete tasks. Includes authentication, dashboard, and REST API integration using MERN stack."
              ghLink="https://github.com/yourusername/task-manager"
              demoLink="https://your-task-app.vercel.app"
            />
          </Col>

          {/* Project 4 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Platform"
              description="A full stack blogging platform where users can write, edit, and delete blogs. Includes authentication, comments, and rich text editor using MERN stack."
              ghLink="https://github.com/yourusername/blog-platform"
              demoLink="https://your-blog.vercel.app"
            />
          </Col>

          {/* Project 5 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobportal}
              isBlog={false}
              title="Virtual Lab Assistant by AI"
              description="AI-powered Virtual Lab Assistant that helps students perform experiments virtually, provides step-by-step guidance, and answers queries in real-time. Built using MERN stack with AI integration."
              ghLink="https://github.com/yourusername/job-portal"
              demoLink="https://your-job-portal.vercel.app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;