import styled from "styled-components";
import { EmojiSpan } from "../../Common/Styled";
import { Container, Modal, Button, Row } from "react-bootstrap";
import { useState } from "react";

const projects = [
  {
    name: "WeEatigo",
    url: "https://eatigo-app.herokuapp.com/",
    githubUrl: "https://github.com/jehon11/restaurant-reservations",
    imgUrl: "/images/projects/eatigo.jpg",
    description:
      "A restaurant reservation app that delivers discounts for reserving at non-peak hours, thereby smoothing out demand and increasing overall business. A clone of a popular website in Asia",
  },
  {
    name: "360Review",
    url: "https://employee-reviews.jeremyhon.com",
    githubUrl: "https://github.com/jehon11/employee_review",
    imgUrl: "/images/projects/360review.jpg",
    description:
      "A web-app that allows employees to submit feedback towards each other’s performance review (React, Rails, Postgres, Heroku)",
  },
  {
    name: "Slacky",
    url: "https://slacky-app.herokuapp.com/",
    githubUrl: "https://github.com/jehon11/slacky-chat-app",
    imgUrl: "/images/projects/slacky.jpg",
    description:
      "A Slack-like SPA chat app (React/Redux, Rails, Postgres, Heroku, WebSockets)",
  },
];
const Projects: React.FC = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const handleClose = () => setActiveModal(null);
  const handleShow = (modalIndex: number) => setActiveModal(modalIndex);

  return (
    <>
      <ProjectsContainer>
        <Title>
          Projects<EmojiSpan>🤔</EmojiSpan>
        </Title>
        <Container style={{ padding: 0 }}>
          <Row>
            {projects.map((project, index) => (
              <ProjectCard className="col-12 col-md-6" key={index}>
                <Project onClick={() => handleShow(index)}>
                  <ProjectImage src={project.imgUrl} />
                  <ProjectOverlay>{project.name}</ProjectOverlay>
                </Project>
                <Modal
                  show={activeModal === index}
                  onHide={handleClose}
                  centered
                  size="lg"
                >
                  <ModalContent>
                    <ProjectModalImageContainer>
                      <ProjectImage src={project.imgUrl} />
                    </ProjectModalImageContainer>
                    <ProjectDescriptionContainer>
                      <ProjectLink href={project.githubUrl} target="_blank">
                        Github Repo
                      </ProjectLink>
                      <ProjectLink href={project.url} target="_blank">
                        Live Site
                      </ProjectLink>
                      <p>{project.description}</p>
                    </ProjectDescriptionContainer>
                  </ModalContent>
                </Modal>
              </ProjectCard>
            ))}
          </Row>
        </Container>
      </ProjectsContainer>
    </>
  );
};

const ProjectDescriptionContainer = styled.div`
  padding: 20px 5%;
`;

const ProjectLink = styled.a`
  display: inline-block;
  color: var(--color-primary);
  border-bottom: 1px solid var(--color-primary);
  padding: 5px 1px;
  transition: all 0.2s ease;
  margin-right: 25px;
  margin-bottom: 20px;

  &:hover {
    background-color: var(--color-text);
    color: var(--color-text-invert);
  }
`;

const ProjectCard = styled.div``;

const ModalContent = styled.div`
  height: 75vh;
  background-color: var(--color-bg);
  overflow-y: scroll;
`;

const Project = styled.div`
  cursor: pointer;
  margin-bottom: 30px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-invert-transp);
  position: relative;
`;

const ProjectOverlay = styled.div`
  font-weight: bold;
  font-size: 18px;
  padding: 25px;
  position: absolute;
  background-color: var(--color-invert-transp2);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: opacity 400ms ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const ProjectImage = styled.img`
  width: 70%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
`;

const ProjectModalImageContainer = styled.div`
  height: 65%;
  width: 100%;
  background-color: var(--color-invert-transp);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectsContainer = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.h3`
  color: var(--color-secondary);
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 25px;
`;

export default Projects;
