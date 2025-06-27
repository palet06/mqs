/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vsDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeFormatter = ({ jsonString }: { jsonString: string }) => {
  let formatted = "";

  try {
    const parsed = JSON.parse(jsonString);
    formatted = JSON.stringify(parsed, null, 2); // 2 boşlukla girinti
  } catch (err) {
    formatted = "// Geçersiz JSON";
  }

  return (
    <SyntaxHighlighter
      PreTag="div"
      useInlineStyles
      lineProps={(lineNumber) => ({
        style: {
          textWrap: "wrap",
        },
      })}
      wrapLongLines
      customStyle={{
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
        overflowWrap: "anywhere",
        maxWidth: "100%",
      }}
      language="json"
      style={oneDark}
    >
      {formatted}
    </SyntaxHighlighter>
  );
};

export default CodeFormatter;
