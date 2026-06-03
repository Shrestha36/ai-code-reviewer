import { useState } from "react";
import Editor from "@monaco-editor/react";

import { explainLine } from "../services/api";
import SemanticOverlay from "./SemanticOverlay";

type Props = {
  language: string;
  code: string;
  setCode: (code: string) => void;
};

const CodeEditor = ({ language, code, setCode }: Props) => {
  const [explanation, setExplanation] = useState("");

  const handleEditorMount = (editor: any) => {
    editor.onMouseDown(async (event: any) => {
      try {
        const lineNumber = event.target.position?.lineNumber;

        if (!lineNumber) return;

        const lineContent = editor.getModel()?.getLineContent(lineNumber);

        if (!lineContent) return;

        const result = await explainLine(lineContent);

        setExplanation(result.explanation);
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {explanation && <SemanticOverlay explanation={explanation} />}

      <Editor
        height="80vh"
        theme="vs-dark"
        language={language}
        value={code}
        onMount={handleEditorMount}
        options={{
          fontSize: 16,
          lineHeight: 28,
          minimap: {
            enabled: false,
          },
        }}
        onChange={(value) => setCode(value || "")}
      />
    </div>
  );
};

export default CodeEditor;
