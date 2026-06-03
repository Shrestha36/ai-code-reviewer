import Editor from "@monaco-editor/react";

type Props = {
  language: string;
  code: string;
  setCode: (code: string) => void;
};

const CodeEditor = ({ language, code, setCode }: Props) => {
  return (
    <Editor
      height="80vh"
      theme="vs-dark"
      language={language}
      value={code}
      onChange={(value) => setCode(value || "")}
    />
  );
};

export default CodeEditor;
