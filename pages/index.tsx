import styled from "styled-components";
import ProjectList from "../components/ProfilePage/ProjectList";
import Navbar from "../components/Navbar";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="hero mb-5">
          <Title>Hi, I'm Jeremy 👋</Title>
          <Paragraph>
            I'm a full-stack software engineer from Hong Kong currently based in
            Tokyo, Japan
          </Paragraph>
          <Paragraph>
            I've developed features for millions of users who use Wantedly to
            find their next role
          </Paragraph>
          <Paragraph>
            In the past I worked in finance where I spent 3 years at an
            investment bank selling derivatives before leaving to follow my
            passion in tech
          </Paragraph>
          <EmailLink href="mailto:jeremy@jeremyhon.com" target="_blank">
            jeremy@jeremyhon.com
          </EmailLink>
        </div>
        <ProjectList />
      </div>
    </>
  );
};

const EmailLink = styled.a`
  color: var(--color-primary);
  border-bottom: 1px solid var(--color-primary);
  padding: 5px 1px;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--color-text);
    color: var(--color-text-invert);
    text-decoration: none;
  }
`;

const Paragraph = styled.p`
  max-width: 650px;
`;

const Title = styled.h1`
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 25px;
`;

export default HomePage;
