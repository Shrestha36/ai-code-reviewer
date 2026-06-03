import Editor from "@monaco-editor/react";

type Props = {
  language: string;
  code: string;
  setCode: (code: string) => void;
};

const CodeEditor = ({
  language,
  code,
  setCode,
}: Props) => {
  return (
    <Editor
      height="70vh"
      language={language}
      theme="vs-dark"
      value={code}
      onChange={(value) =>
        setCode(value || "")
      }
    />
  );
};

export default CodeEditor;