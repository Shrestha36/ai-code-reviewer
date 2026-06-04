import {
  OverlayContainer,
  OverlayTitle,
  OverlayText,
  CloseButton,
} from "../styles/SemanticOverlay.styles";

type Props = {
  explanation: string;
  onClose: () => void;
};

export default function SemanticOverlay({
  explanation,
  onClose,
}: Props) {
  return (
    <OverlayContainer>
      <CloseButton onClick={onClose}>
        ✕
      </CloseButton>

      <OverlayTitle>
        🧠 AI Semantic Context
      </OverlayTitle>

      <OverlayText>
        {explanation}
      </OverlayText>
    </OverlayContainer>
  );
}