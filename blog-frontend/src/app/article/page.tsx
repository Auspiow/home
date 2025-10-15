import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import "./article.css";

export default function ArticleListPage() {
  const articlesDir = path.join(process.cwd(), "src", "content", "articles");
  const files = fs.readdirSync(articlesDir);

  // 获取每篇文章的元数据
  const articles = files.map((filename) => {
    const filePath = path.join(articlesDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    const slug = filename.replace(/\.md$/, "");
    return {
      title: data.title || slug,
      date: data.date || "未知日期",
      description: data.description || "暂无简介",
      slug,
    };
  });

  return (
    <main className="article-page">
      <div className="article-container">
        <h1 className="article-title">文章列表</h1>
        <div className="article-list">
          {articles.map((post) => (
            <Link key={post.slug} href={`/article/${post.slug}`} className="article-card">
              <h2>{post.title}</h2>
              <p className="article-date">{post.date}</p>
              <p className="article-desc">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
