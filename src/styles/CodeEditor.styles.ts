import styled from "styled-components";

export const EditorContainer = styled.div`
  position: relative;
  min-height: 700px;
  height="100%"

  border-radius: 18px;

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.08);

  background: #111827;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);

  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(59, 130, 246, 0.4);
  }
`;

export const EditorHeader = styled.div`
  height: 48px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 0 16px;

  background: #0f172a;

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const EditorTitle = styled.div`
  color: #e5e7eb;

  font-size: 14px;

  font-weight: 600;
`;

export const EditorBadge = styled.div`
  background: rgba(59, 130, 246, 0.15);

  color: #60a5fa;

  padding: 6px 12px;

  border-radius: 999px;

  font-size: 12px;

  font-weight: 600;
`;
