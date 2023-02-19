import styled from "styled-components";
import { EmojiSpan } from "../../Common/Styled";

const LANGUAGES = [
  "TypeScript / JavaScript",
  "Elixir",
  "Ruby",
  "Golang",
  "Python",
  "Others...",
];

const TECHNOLOGIES = [
  "Phoenix",
  "React",
  "Apollo / GraphQL",
  "Docker / Kubernetes / Terraform",
  "GCP",
  "Elasticsearch",
  "Postgres",
  "AWS",
  "Node / Express",
  "Ruby on Rails",
  "Next.js",
  "Others...",
];

const Technicals: React.FC = () => {
  return (
    <TechnologiesContainer>
      <Title>
        Things I know<EmojiSpan>💻</EmojiSpan>
      </Title>
      <Subtitle>Languages</Subtitle>
      <div>
        {LANGUAGES.map((language) => (
          <Skill key={language}>{language}</Skill>
        ))}
      </div>
      <Subtitle>Technologies</Subtitle>
      <div>
        {TECHNOLOGIES.map((technology) => (
          <Skill key={technology}>{technology}</Skill>
        ))}
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
