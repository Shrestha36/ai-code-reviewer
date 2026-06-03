import styled from "styled-components";

export const StatsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`;

export const StatCard = styled.div`
  flex: 1;

  background: #161b22;

  border: 1px solid #30363d;

  border-radius: 12px;

  padding: 16px;

  transition: 0.2s ease;

  &:hover {
    border-color: #58a6ff;
    transform: translateY(-2px);
  }
`;

export const StatValue = styled.h3`
  margin: 0;
  font-size: 24px;
  color: #58a6ff;
`;

export const StatLabel = styled.p`
  margin-top: 8px;
  color: #8b949e;
  font-size: 14px;
`;