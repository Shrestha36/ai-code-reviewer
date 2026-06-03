import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;

  padding: 24px;

  background:
    radial-gradient(
      circle at top,
      #172554,
      #020617
    );

  color: white;
`;

export const ContentGrid = styled.div`
  display: grid;

  grid-template-columns:
    2fr
    1fr;

  gap: 24px;

  margin-top: 20px;
`;

export const ReviewButton = styled.button`
  margin-top: 20px;

  width: 100%;

  padding: 16px;

  border: none;

  border-radius: 14px;

  background:
    linear-gradient(
      135deg,
      #2563eb,
      #7c3aed
    );

  color: white;

  font-size: 16px;

  font-weight: 600;

  cursor: pointer;
`;

export const ReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
`;