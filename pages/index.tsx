import styled from "styled-components";
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
      </Container>
    </>
  );
};
export default HomePage;
