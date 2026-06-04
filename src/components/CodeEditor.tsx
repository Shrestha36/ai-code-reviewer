import { useState } from "react";
import Editor from "@monaco-editor/react";

import { explainLine } from "../services/api";
import SemanticOverlay from "./SemanticOverlay";

import {
  EditorContainer,
  EditorHeader,
  EditorTitle,
  EditorBadge,
} from "../styles/CodeEditor.styles";

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
  const [explanation, setExplanation] = useState("");
  const [loadingExplanation, setLoadingExplanation] =
    useState(false);
  const [showOverlay, setShowOverlay] =
    useState(true);

  const handleEditorMount = (editor: any) => {
    editor.onMouseDown(async (event: any) => {
      const lineNumber =
        event.target.position?.lineNumber;

      if (!lineNumber) return;

      const lineContent =
        editor
          .getModel()
          ?.getLineContent(lineNumber);

      if (!lineContent?.trim()) return;

      try {
        setLoadingExplanation(true);

        const result =
          await explainLine(lineContent);

        setExplanation(
          result.explanation
        );

        setShowOverlay(true);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingExplanation(false);
      }
    });
  };

  return (
    <EditorContainer>
      <EditorHeader>
        <EditorTitle>
          ● Code Editor
        </EditorTitle>

        <EditorBadge>
          {language.toUpperCase()}
        </EditorBadge>
      </EditorHeader>

      {loadingExplanation && (
        <SemanticOverlay
          explanation="🤖 Analyzing line..."
          onClose={() =>
            setShowOverlay(false)
          }
        />
      )}

      {!loadingExplanation &&
        explanation &&
        showOverlay && (
          <SemanticOverlay
            explanation={explanation}
            onClose={() =>
              setShowOverlay(false)
            }
          />
        )}

      <Editor
        height="calc(80vh - 48px)"
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

          padding: {
            top: 20,
          },

          smoothScrolling: true,

          scrollBeyondLastLine: false,

          fontFamily:
            "'JetBrains Mono', monospace",
        }}
        onChange={(value) =>
          setCode(value || "")
        }
      />
    </EditorContainer>
  );
};

export default CodeEditor;