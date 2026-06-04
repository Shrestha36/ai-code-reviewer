import { StyledSelect } from "../styles/LanguageSelector.styles";

type Props = {
  language: string;
  setLanguage: (language: string) => void;
};

export default function LanguageSelector({
  language,
  setLanguage,
}: Props) {
  return (
    <StyledSelect
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
    >
      <option value="javascript">JavaScript</option>
      <option value="typescript">TypeScript</option>
      <option value="python">Python</option>
      <option value="java">Java</option>
      <option value="cpp">C++</option>
      <option value="sql">SQL</option>
    </StyledSelect>
  );
}