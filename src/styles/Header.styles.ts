import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 32px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  background: rgba(15, 23, 42, 0.6);

  backdrop-filter: blur(10px);

  border-radius: 16px;

  margin-bottom: 24px;
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;

  margin: 0;
`;

export const Subtitle = styled.p`
  margin-top: 4px;

  color: #94a3b8;

  font-size: 0.95rem;
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const GithubButton = styled.button`
  border: none;

  background: #2563eb;

  color: white;

  padding: 10px 16px;

  border-radius: 10px;

  cursor: pointer;

  font-weight: 600;

  transition: all 0.2s ease;

  &:hover {
    background: #1d4ed8;
  }
`;