import styled from "styled-components";
import { EmojiSpan } from "../../Common/Styled";

const AboutMe: React.FC = () => {
  return (
    <AboutMeContainer>
      <Title>
        Hi, I'm Jeremy<EmojiSpan>👋</EmojiSpan>
      </Title>
      <Paragraph>
        I'm a software engineer currently based in{" "}
        <CrossedOut>Hong Kong</CrossedOut> <CrossedOut>Tokyo</CrossedOut> London
      </Paragraph>
      <Paragraph>
        I love building products and solving interesting problems
      </Paragraph>
      <Paragraph>
        Most recently I've been helping to build{" "}
        <Link target="_blank" href="https://otta.com">
          Otta
        </Link>
      </Paragraph>
      <Paragraph>
        If you'd like to get in touch, feel free to reach out
      </Paragraph>
      <EmailLink href="mailto:jeremy@jeremyhon.com" target="_blank">
        jeremy@jeremyhon.com
      </EmailLink>
    </AboutMeContainer>
  );
};

const AboutMeContainer = styled.div`
  margin-top: 200px;
  margin-bottom: 200px;
`;

const Link = styled.a`
  color: var(--color-primary);
  padding: 5px 1px;

  &:hover {
    color: var(--color-primary);
  }
`;

const EmailLink = styled(Link)`
  border-bottom: 1px solid var(--color-primary);

  &:hover {
    background-color: var(--color-text);
    color: var(--color-text-invert);
  }
`;

const Paragraph = styled.p`
  max-width: 625px;
`;

const Title = styled.h1`
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 25px;
`;

const CrossedOut = styled.span`
  text-decoration: line-through;
`;

export default AboutMe;
