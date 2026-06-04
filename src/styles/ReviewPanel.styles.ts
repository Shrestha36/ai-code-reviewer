import styled from "styled-components";

export const ReviewContainer = styled.div`
  background: #111827;

  border-radius: 18px;

  padding: 24px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  min-height: 500px;
  max-height: 700px;

  overflow-y: auto;
`;

export const ReviewTitle = styled.h2`
  color: white;

  margin-bottom: 20px;

  font-size: 28px;

  font-weight: 700;
`;

export const ReviewContent = styled.div`
  color: #d1d5db;

  font-size: 16px;

  line-height: 1.8;

  h1,
  h2,
  h3 {
    color: #60a5fa;

    margin-top: 20px;
    margin-bottom: 12px;
  }

  p {
    margin-bottom: 12px;
  }

  ul {
    padding-left: 24px;

    margin-bottom: 16px;
  }

  li {
    margin-bottom: 8px;
  }

  code {
    background: rgba(255, 255, 255, 0.08);

    padding: 2px 6px;

    border-radius: 6px;

    font-size: 14px;
  }

  strong {
    color: white;
  }
`;
