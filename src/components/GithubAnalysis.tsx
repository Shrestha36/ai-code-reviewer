import { useState } from "react";

import {
  GithubContainer,
  GithubInput,
  AnalyzeButton,
} from "../styles/GithubInput.styles"

type Props = {
  onAnalyze: (repoUrl: string) => void;
  loading: boolean;
};

export default function GithubAnalysis({ onAnalyze, loading }: Props) {
  const [repoUrl, setRepoUrl] = useState("");

  return (
    <GithubContainer>
      <GithubInput
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
        placeholder="Paste GitHub Repository URL"
      />

      <AnalyzeButton disabled={loading} onClick={() => onAnalyze(repoUrl)}>
        {loading ? "Analyzing..." : "Analyze Repo"}
      </AnalyzeButton>
    </GithubContainer>
  );
}
