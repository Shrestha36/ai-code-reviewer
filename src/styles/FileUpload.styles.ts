import styled from "styled-components";

export const UploadButton = styled.label`
  background: #1e293b;
  color: white;

  padding: 10px 18px;

  border-radius: 10px;

  cursor: pointer;

  border: 1px solid rgba(255,255,255,.1);

  transition: all .2s ease;

  &:hover {
    border-color: #3b82f6;
    transform: translateY(-2px);
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;