import {
  HeaderContainer,
  Title,
  Subtitle,
  GithubButton,
} from "../styles/Header.styles";

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <Title>AI Code Reviewer</Title>

        <Subtitle>
          Analyze bugs, security issues and performance using AI
        </Subtitle>
      </div>

      <GithubButton>
        Connect GitHub
      </GithubButton>
    </HeaderContainer>
  );
}