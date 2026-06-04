import {
  HeaderContainer,
  Title,
  Subtitle,
  GithubButton,
} from "../styles/Header.styles";

type Props = {
  onGithubClick: () => void;
};

export default function Header({
  onGithubClick,
}: Props) {
  return (
    <HeaderContainer>
      <div>
        <Title>AI Code Reviewer</Title>

        <Subtitle>
          Analyze bugs, security issues and performance using AI
        </Subtitle>
      </div>

      <GithubButton onClick={onGithubClick}>
        Connect GitHub
      </GithubButton>
    </HeaderContainer>
  );
}