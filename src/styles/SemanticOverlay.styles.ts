import styled from "styled-components";

export const OverlayContainer = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;

  width: 420px;
  max-height: 500px;

  overflow-y: auto;

  padding: 24px;

  background: rgba(15, 23, 42, 0.97);
  backdrop-filter: blur(10px);

  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 18px;

  color: #e2e8f0;

  z-index: 999;

  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
`;

export const OverlayTitle = styled.h3`
  margin-bottom: 16px;

  color: #60a5fa;

  font-size: 22px;
  font-weight: 700;
`;

export const OverlayText = styled.div`
  font-size: 20px;
  line-height: 1.8;

  white-space: pre-wrap;

  color: #cbd5e1;
`;