import {
  OverlayContainer,
  OverlayTitle,
  OverlayText,
} from "../styles/SemanticOverlay.styles";

type Props = {
  explanation: string;
};

export default function SemanticOverlay({
  explanation,
}: Props) {
  return (
    <OverlayContainer>
      <OverlayTitle>
        🧠 AI Semantic Context
      </OverlayTitle>

      <OverlayText>
        {explanation}
      </OverlayText>
    </OverlayContainer>
  );
}