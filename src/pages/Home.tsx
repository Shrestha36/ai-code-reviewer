import { useState } from "react";

import Header from "../components/Header";
import LanguageSelector from "../components/LanguageSelector";
import CodeEditor from "../components/CodeEditor";
import ReviewPanel from "../components/ReviewPanel";

import {
  PageContainer,
  ContentGrid,
  ReviewButton,
} from "../styles/Home.styles";

function Home() {
  const [language, setLanguage] = useState<string>("typescript");

  const [code, setCode] = useState<string>(
    "// Paste your code here"
  );

  const [review, setReview] = useState<string>("");

  const handleReview = () => {
    setReview("AI review will appear here...");
  };

  return (
    <PageContainer>
      <Header />

      <LanguageSelector
        language={language}
        setLanguage={setLanguage}
      />

      <ContentGrid>
        <CodeEditor
          language={language}
          code={code}
          setCode={setCode}
        />

        <ReviewPanel review={review} />
      </ContentGrid>

      <ReviewButton onClick={handleReview}>
        Review Code
      </ReviewButton>
    </PageContainer>
  );
}

export default Home;