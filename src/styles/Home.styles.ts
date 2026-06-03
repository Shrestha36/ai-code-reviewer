import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  background: #020617;
  color: white;
  padding: 32px;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const ReviewButton = styled.button`
  background: #2563eb;
  border: none;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #1d4ed8;
  }
`;