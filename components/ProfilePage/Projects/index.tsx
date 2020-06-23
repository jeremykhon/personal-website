import styled from "styled-components";
import { EmojiSpan } from "../../Common/Styled";
import { Container, Modal, Button } from "react-bootstrap";
import { useState } from "react";

const projects = [
  {
    name: "eatigo1",
    url: "https://eatigo-app.herokuapp.com/",
    githubUrl: "https://github.com/jehon11/restaurant-reservations",
    imgUrl: "/images/projects/eatigo.jpg",
    description:
      "A restaurant reservation app that delivers discounts for reserving at non-peak hours, thereby smoothing out demand and increasing overall business. A clone of a popular website in Asia",
  },
  {
    name: "eatigo2",
    url: "https://eatigo-app.herokuapp.com/",
    githubUrl: "https://github.com/jehon11/restaurant-reservations",
    imgUrl: "/images/projects/eatigo.jpg",
    description:
      "A restaurant reservation app that delivers discounts for reserving at non-peak hours, thereby smoothing out demand and increasing overall business. A clone of a popular website in Asia",
  },
  {
    name: "eatigo3  ",
    url: "https://eatigo-app.herokuapp.com/",
    githubUrl: "https://github.com/jehon11/restaurant-reservations",
    imgUrl: "/images/projects/eatigo.jpg",
    description:
      "A restaurant reservation app that delivers discounts for reserving at non-peak hours, thereby smoothing out demand and increasing overall business. A clone of a popular website in Asia",
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
          Featured Projects<EmojiSpan>🤔</EmojiSpan>
        </Title>
        <Container style={{ padding: 0 }}>
          <ProjectContainer className="row">
            {projects.map((project, index) => (
              <>
                <ProjectContainer className="col-12 col-md-6" key={index}>
                  <Project onClick={() => handleShow(index)}>
                    <ProjectImage imgUrl={project.imgUrl} />
                  </Project>
                </ProjectContainer>
                <Modal
                  show={activeModal === index}
                  onHide={handleClose}
                  key={index}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{project.name}</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            ))}
          </ProjectContainer>
        </Container>
      </ProjectsContainer>
    </>
  );
};

interface ProjectImageProps {
  imgUrl: string;
}

const ProjectContainer = styled.div``;

const Project = styled.div`
  margin-bottom: 30px;
  height: 350px;
  padding: 15% 10%;
  background-color: var(--color-invert-transp);
`;

const ProjectImage = styled.div<ProjectImageProps>`
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.imgUrl});
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
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
