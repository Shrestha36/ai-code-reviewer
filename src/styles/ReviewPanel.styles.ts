import styled from "styled-components";

export const ReviewContainer = styled.div`
  background: #111827;

  border-radius: 18px;

  padding: 24px;

  border: 1px solid rgba(255,255,255,.08);

  min-height: 700px;

  overflow-y: auto;
`;

export const ReviewTitle = styled.h2`
  color: white;
  margin-bottom: 16px;
`;

export const ReviewContent = styled.pre`
  white-space: pre-wrap;

  line-height: 1.7;

  color: #d1d5db;

  font-size: 14px;
`;