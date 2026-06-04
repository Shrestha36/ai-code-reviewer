import styled from "styled-components";

export const OverlayContainer = styled.div`
  position: absolute;

  top: 20px;
  right: 20px;

  width: 320px;
  max-height: 300px;

  overflow-y: auto;

  background: #111827;

  border: 1px solid rgba(96,165,250,.3);

  border-radius: 16px;

  padding: 16px;

  z-index: 10;

  box-shadow: 0 10px 30px rgba(0,0,0,.4);
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
export const CloseButton = styled.button`
  position: absolute;

  top: 12px;

  right: 12px;

  background: transparent;

  border: none;

  color: #94a3b8;

  cursor: pointer;

  font-size: 18px;

  transition: 0.2s;

  &:hover {
    color: white;
    transform: scale(1.1);
  }
`;