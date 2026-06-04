import ReactMarkdown from "react-markdown";

import {
  ReviewContainer,
  ReviewTitle,
  ReviewContent,
} from "../styles/ReviewPanel.styles";

type Props = {
  review: string;
};

export default function ReviewPanel({
  review,
}: Props) {
  return (
    <ReviewContainer>
      <ReviewTitle>
        AI Review
      </ReviewTitle>

      <ReviewContent>
        <ReactMarkdown>
          {review || "Waiting for analysis..."}
        </ReactMarkdown>
      </ReviewContent>
    </ReviewContainer>
  );
}