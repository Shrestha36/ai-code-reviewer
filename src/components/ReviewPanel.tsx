import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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

      <ReviewContent>
        <ReactMarkdown
          components={{
            code({ inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || "");

              return !inline && match ? (
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{
                    borderRadius: "12px",
                    padding: "16px",
                    marginTop: "16px",
                    marginBottom: "16px",
                    fontSize: "14px",
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {review || "Waiting for analysis..."}
        </ReactMarkdown>
      </ReviewContent>
    </ReviewContainer>
  );
}
