// src/components/Preview.js
import React, { useEffect, useRef } from "react";

const Preview = ({ code }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframeDoc = iframeRef.current.contentDocument;
    iframeDoc.open();
    iframeDoc.write(`
      <html>
        <body>
          <div id="root"></div>
          <script type="module">
            ${code}
          </script>
        </body>
      </html>
    `);
    iframeDoc.close();
  }, [code]);

  return (
    <div className="preview-container">
      <iframe ref={iframeRef} title="Live Preview" />
    </div>
  );
};

export default Preview;
