import styled from "styled-components";

export const StatsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`;

export const StatCard = styled.div`
  padding: 18px;

  border-radius: 14px;

  background:
    rgba(255,255,255,.03);

  border:
    1px solid rgba(255,255,255,.08);

  backdrop-filter: blur(20px);
`;

export const StatValue = styled.h3`
  margin: 0;
  font-size: 24px;
  color: #58a6ff;
`;

export const StatLabel = styled.p`
  margin-top: 8px;
  color: #8b949e;
  font-size: 20px;
`;