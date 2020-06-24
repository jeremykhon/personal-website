import styled from "styled-components";
import { EmojiSpan } from "../../Common/Styled";

const Technicals: React.FC = () => {
  return (
    <TechnologiesContainer>
      <Title>
        Things I know<EmojiSpan>💻</EmojiSpan>
      </Title>
      <Subtitle>Languages</Subtitle>
      <div>
        <Skill>Ruby</Skill>
        <Skill>JavaScript</Skill>
        <Skill>TypeScript</Skill>
        <Skill>HTML</Skill>
        <Skill>SCSS</Skill>
        <Skill>SQL</Skill>
        <Skill>Golang</Skill>
        <Skill>Python</Skill>
      </div>
      <Subtitle>Technologies</Subtitle>
      <div>
        <Skill>Ruby on Rails</Skill>
        <Skill>Node</Skill>
        <Skill>Express</Skill>
        <Skill>React</Skill>
        <Skill>Redux</Skill>
        <Skill>Next.js</Skill>
        <Skill>Postgres</Skill>
        <Skill>MongoDB</Skill>
        <Skill>Redis</Skill>
        <Skill>Docker</Skill>
        <Skill>GCP - Functions, BigQuery, Pub/Sub</Skill>
        <Skill>AWS - S3, EB, Lambda, EC2</Skill>
        <Skill>Heroku</Skill>
        <Skill>Vercel</Skill>
        <Skill>Firebase</Skill>
        <Skill>Git</Skill>
      </div>
    </TechnologiesContainer>
  );
};

const Skill = styled.div`
  display: inline-block;
  border: 1px solid var(--color-text);
  color: var(--color-text);
  border-radius: 12px;
  padding: 2px 12px;
  margin-right: 8px;
  margin-bottom: 10px;
  transition: all 0.2s ease;
  cursor: default;

  &:hover {
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
  }
`;

const TechnologiesContainer = styled.div`
  margin-bottom: 150px;
`;

const Subtitle = styled.h6`
  /* color: var(--color-primary); */
  margin-top: 35px;
  margin-bottom: 25px;
`;

const Title = styled.h3`
  color: var(--color-secondary);
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 25px;
`;

export default Technicals;
