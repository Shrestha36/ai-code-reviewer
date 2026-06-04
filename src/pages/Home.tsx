import { useState } from "react";
import { reviewCode } from "../services/api";

import Header from "../components/Header";
import LanguageSelector from "../components/LanguageSelector";
import CodeEditor from "../components/CodeEditor";
import ReviewPanel from "../components/ReviewPanel";
import StatsPanel from "../components/StatsPanel";
import { calculateComplexity } from "../utils/codeMetrics";

import {
  PageContainer,
  ContentGrid,
  ReviewButton,
  ReviewSection,
  LanguageContainer,
  HomeEditorContainer,
  TopSection
} from "../styles/Home.styles";

function Home() {
  const [language, setLanguage] = useState("typescript");
  const [code, setCode] = useState("// Paste your code here");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [confidence, setConfidence] = useState(0);
  const [vulnerabilities, setVulnerabilities] = useState({
    high: 0,
    medium: 0,
    low: 0,
  });

  const complexity = calculateComplexity(code);

  const handleReview = async () => {
    setLoading(true);

    try {
      const result = await reviewCode(language, code);
      console.log("AI Review Result:", result);

      setReview(result.review);
      setConfidence(result.confidence);
      setVulnerabilities(
        result.vulnerabilities || {
          high: 0,
          medium: 0,
          low: 0,
        },
      );
    } catch (error) {
      console.error(error);
      setReview("Failed to get AI review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <Header />
      <LanguageContainer>
        <LanguageSelector language={language} setLanguage={setLanguage} />
      </LanguageContainer>
      <ContentGrid>
        <TopSection>
          <HomeEditorContainer>
            <CodeEditor language={language} code={code} setCode={setCode} />
          </HomeEditorContainer>

          <ReviewSection>
            <StatsPanel
              lines={code.split("\n").length}
              confidence={confidence}
              vulnerabilities={vulnerabilities}
              complexity={complexity}
            />
          </ReviewSection>
        </TopSection>

        <ReviewPanel review={review} />
      </ContentGrid>

      <ReviewButton onClick={handleReview} disabled={loading}>
        {loading ? "🤖 Analyzing Code..." : "Review Code"}
      </ReviewButton>
    </PageContainer>
  );
}

export default Home;
