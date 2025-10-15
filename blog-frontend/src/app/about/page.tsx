import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export default async function AboutPage() {
  const filePath = path.join(process.cwd(), "src", "content", "about.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 prose prose-invert prose-orange">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {fileContent}
      </ReactMarkdown>
    </main>
  );
}
