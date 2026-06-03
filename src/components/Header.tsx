import {
  HeaderContainer,
  LogoSection,
  Title,
  Subtitle,
  ActionContainer,
  GithubButton,
} from "../styles/Header.styles"

const Header = () => {
  return (
    <HeaderContainer>
      <LogoSection>
        <Title>AI Code Reviewer</Title>

        <Subtitle>
          Review, optimize and secure your code with AI
        </Subtitle>
      </LogoSection>

      <ActionContainer>
        <GithubButton>
          Connect GitHub
        </GithubButton>
      </ActionContainer>
    </HeaderContainer>
  );
};

export default Header;