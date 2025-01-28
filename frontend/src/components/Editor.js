
import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";

const Editor = ({ code, setCode }) => {
  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
    <div className="editor-container">
      <MonacoEditor
        height="400px"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={code}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default Editor;
