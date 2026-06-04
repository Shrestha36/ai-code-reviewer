import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  padding: 24px;
  display: flex;
  flex-direction: column;

  background: radial-gradient(circle at top, #172554, #020617);

  color: white;
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const ReviewButton = styled.button`
  margin-top: 20px;

  width: 100%;

  padding: 16px;

  border: none;

  border-radius: 14px;

  background: linear-gradient(135deg, #2563eb, #7c3aed);

  color: white;

  font-size: 18px;

  font-weight: 600;

  cursor: pointer;
`;

export const ReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 250px;
`;

export const LanguageContainer = styled.div`
  margin: 20px;
`;
export const HomeEditorContainer = styled.div`
   flex: 1;
`;
export const ContentGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TopSection = styled.div`
  display: flex;
  gap: 24px;
`;