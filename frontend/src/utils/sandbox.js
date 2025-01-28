// src/utils/sandbox.js
import * as esbuild from "esbuild-wasm";

export const bundleCode = async (code, packages) => {
  const entryPoint = `
    import React from "react";
    import ReactDOM from "react-dom";

    ${packages.map(
      (pkg) => `import "${pkg.name}@${pkg.version}";`
    ).join("\n")}

    ${code}
  `;

  const result = await esbuild.build({
    entryPoints: ["index.js"],
    bundle: true,
    write: false,
    format: "esm",
    stdin: {
      contents: entryPoint,
      resolveDir: "/",
    },
  });

  return result.outputFiles[0].text;
};
