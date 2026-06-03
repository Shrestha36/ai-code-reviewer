import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #161b22;

  border: 1px solid #30363d;

  border-radius: 12px;

  padding: 24px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin: 0;
`;

export const Subtitle = styled.p`
  margin-top: 8px;
  color: #8b949e;
`;

export const GithubButton = styled.button`
  background: #238636;
  color: white;

  border: none;

  padding: 10px 18px;

  border-radius: 8px;

  cursor: pointer;
`;