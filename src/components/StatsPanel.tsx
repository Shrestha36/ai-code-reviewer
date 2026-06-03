import {
  StatsContainer,
  StatCard,
  StatValue,
  StatLabel,
} from "../styles/StatsPanel.styles";

type Props = {
  lines: number;
};

export default function StatsPanel({
  lines,
}: Props) {
  return (
    <StatsContainer>
      <StatCard>
        <StatValue>{lines}</StatValue>
        <StatLabel>Lines of Code</StatLabel>
      </StatCard>

      <StatCard>
        <StatValue>AI</StatValue>
        <StatLabel>Powered Review</StatLabel>
      </StatCard>

      <StatCard>
        <StatValue>⚡</StatValue>
        <StatLabel>Instant Analysis</StatLabel>
      </StatCard>
    </StatsContainer>
  );
}