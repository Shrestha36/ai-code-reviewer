import {
  ReviewContainer,
  ReviewTitle,
  ReviewContent,
} from "../styles/ReviewPanel.styles";

type Props = {
  review: string;
};

export default function ReviewPanel({ review }: Props) {
  return (
    <ReviewContainer>
      <ReviewTitle>AI Review</ReviewTitle>

      <ReviewContent>{review || "Waiting for analysis..."}</ReviewContent>
    </ReviewContainer>
  );
}
