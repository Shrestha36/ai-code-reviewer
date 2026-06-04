import VulnerabilityBar from "./VulnerabilityBar";
import {
  StatsContainer,
  StatCard,
  StatValue,
  StatLabel,
} from "../styles/StatsPanel.styles";

type Props = {
  lines: number;
  confidence: number;
  complexity: number;

  vulnerabilities: {
    high: number;
    medium: number;
    low: number;
  };
};

export default function StatsPanel({
  lines,
  confidence,
  vulnerabilities,
  complexity,
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
        <StatValue>⚠️</StatValue>

        <StatLabel>Vulnerability Analysis</StatLabel>

        <VulnerabilityBar
          high={vulnerabilities.high}
          medium={vulnerabilities.medium}
          low={vulnerabilities.low}
        />
      </StatCard>
      <StatCard>
        <StatValue>{complexity}</StatValue>
        <StatLabel>Cyclomatic Complexity</StatLabel>
      </StatCard>
    </StatsContainer>
  );
}
