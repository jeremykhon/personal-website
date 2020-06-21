import styled from "styled-components";
import ProjectList from "../components/ProfilePage/ProjectList";

interface GlobalStyleProps {
  theme: {
    main: string;
    text: string;
  };
}

const HomePage: React.FC = () => {
  return (
    <>
      <Title>Hi, I am Jeremy 👋</Title>
      <Paragraph>
        I'm a full-stack software engineer from Hong Kong and currently based in
        Tokyo, Japan. I've developed features for millions of users who use
        Wantedly to find their next role.
      </Paragraph>
      <ProjectList />
    </>
  );
};

const Paragraph = styled.p`
  max-width: 650px;
`;

const Title = styled.h1`
  margin-top: 50px;
  margin-bottom: 25px;
`;

export default HomePage;
