import styled from "styled-components";

export const GithubContainer =
  styled.div`
    display: flex;
    gap: 12px;
    margin: 20px 0;
  `;

export const GithubInput =
  styled.input`
    flex: 1;

    padding: 14px;

    border-radius: 12px;

    border: 1px solid rgba(255,255,255,.1);

    background: #111827;

    color: white;

    font-size: 15px;

    outline: none;
  `;

export const AnalyzeButton =
  styled.button`
    padding: 14px 20px;

    border: none;

    border-radius: 12px;

    background: #2563eb;

    color: white;

    cursor: pointer;

    font-weight: 600;

    transition: .3s;

    &:hover {
      background: #1d4ed8;
    }

    &:disabled {
      opacity: .6;
      cursor: not-allowed;
    }
  `;