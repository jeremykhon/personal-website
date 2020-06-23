import styled from "styled-components";
import Projects from "../components/ProfilePage/Projects";
import Navbar from "../components/Navbar";
import AboutMe from "../components/ProfilePage/AboutMe";
import Technicals from "../components/ProfilePage/Technicals";
import { Container } from "react-bootstrap";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <AboutMe />
        <Technicals />
        <Projects />
      </Container>
    </>
  );
};
export default HomePage;
