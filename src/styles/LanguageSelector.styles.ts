import styled from "styled-components";

export const StyledSelect = styled.select`
  height: 42px;

  min-width: 180px;

  background: #0f172a;

  color: #e5e7eb;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 12px;

  padding: 0 14px;

  font-size: 14px;

  font-weight: 500;

  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 20px rgba(37, 99, 235, 0.2);
  }
`;