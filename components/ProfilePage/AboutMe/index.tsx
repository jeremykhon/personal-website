import styled from "styled-components";
import { EmojiSpan } from "../../Common/Styled";

const AboutMe: React.FC = () => {
  return (
    <AboutMeContainer>
      <Title>
        Hi, I'm Jeremy<EmojiSpan>👋</EmojiSpan>
      </Title>
      <Paragraph>
        I'm a full-stack software engineer from Hong Kong currently based in
        Tokyo, Japan
      </Paragraph>
      <Paragraph>
        I've developed features for millions of users who use Wantedly to find
        their next role
      </Paragraph>
      <Paragraph>
        In the past I worked in finance where I spent 3 years selling
        derivatives at an investment bank before leaving to follow my passion in
        tech
      </Paragraph>
      <EmailLink href="mailto:jeremy@jeremyhon.com" target="_blank">
        jeremy@jeremyhon.com
      </EmailLink>
    </AboutMeContainer>
  );
};

const AboutMeContainer = styled.div`
  margin-top: 225px;
  margin-bottom: 225px;
`;

const EmailLink = styled.a`
  color: var(--color-primary);
  border-bottom: 1px solid var(--color-primary);
  padding: 5px 1px;
  transition: all 0.2s ease;

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

export default AboutMe;
