import { useState } from "react";
import { reviewCode } from "../services/api";

import Header from "../components/Header";
import LanguageSelector from "../components/LanguageSelector";
import CodeEditor from "../components/CodeEditor";
import ReviewPanel from "../components/ReviewPanel";
import StatsPanel from "../components/StatsPanel";

import {
  PageContainer,
  ContentGrid,
  ReviewButton,
  ReviewSection,
} from "../styles/Home.styles";

function Home() {
  const [language, setLanguage] = useState("typescript");
  const [code, setCode] = useState("// Paste your code here");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    setLoading(true);

    try {
      const result = await reviewCode(language, code);

      setReview(result.review);
    } catch (error) {
      setReview("Failed to get AI review.");
    }

    setLoading(false);
  };

  return (
    <PageContainer>
      <Header />

      <LanguageSelector language={language} setLanguage={setLanguage} />

      <ContentGrid>
        <CodeEditor language={language} code={code} setCode={setCode} />

        <ReviewSection>
          <StatsPanel lines={code.split("\n").length} />

          <ReviewPanel review={review} />
        </ReviewSection>
      </ContentGrid>

      <ReviewButton onClick={handleReview} disabled={loading}>
        {loading ? "🤖 Analyzing Code..." : "Review Code"}
      </ReviewButton>
    </PageContainer>
  );
}

export default Home;
