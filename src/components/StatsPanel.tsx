import {
  StatsContainer,
  StatCard,
  StatValue,
  StatLabel,
} from "../styles/StatsPanel.styles";

type Props = {
  lines: number;
  confidence: number;
};

export default function StatsPanel({
  lines,
  confidence,
}: Props) {
  return (
    <StatsContainer>
      <StatCard>
        <StatValue>{lines}</StatValue>
        <StatLabel>Lines of Code</StatLabel>
      </StatCard>

      <StatCard>
        <StatValue>{confidence}%</StatValue>
        <StatLabel>Confidence Level</StatLabel>
      </StatCard>

      <StatCard>
        <StatValue>⚡</StatValue>
        <StatLabel>Instant Analysis</StatLabel>
      </StatCard>
    </StatsContainer>
  );
}