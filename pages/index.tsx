import styled from "styled-components";

interface GlobalStyleProps {
  theme: {
    main: string;
    text: string;
  };
}

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <Title>Jeremy Hon</Title>
    </div>
  );
};

const Title = styled.h1<GlobalStyleProps>`
  color: ${(props) => props.theme.text};
`;

export default HomePage;
