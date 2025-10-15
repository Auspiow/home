import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="px-6 py-12 text-center">
      <h1 className="text-4xl font-bold">Welcome</h1>
      <p className="mt-4 text-gray-600">
        这里是我的个人博客，用于记录学习与项目。<br />
        感谢 Next.js 的支持。
      </p>
      </main>
    </>
  );
}
