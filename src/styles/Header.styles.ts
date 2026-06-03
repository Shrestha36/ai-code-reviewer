import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 32px;

  border: 1px solid rgba(255,255,255,.08);

  border-radius: 18px;

  background:
    linear-gradient(
      135deg,
      rgba(15,23,42,.95),
      rgba(10,15,25,.95)
    );
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