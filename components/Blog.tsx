import BlogCard from "@/components/BlogCard";

const posts = [
  {
    title:
      "Exploring Next.js: The Growing Choice for Developers and Vercel’s Remarkable Contribution",
    excerpt: "In the ever-evolving world of web development, Next.js stands...",
    link: "https://medium.com/@aakele/exploring-next-js-the-growing-choice-for-developers-and-vercels-remarkable-contribution-493b0fce5171",
  },
  {
    title:
      "The Modern Developer’s Guide to i18n: Why next-intl is Changing Everything",
    excerpt: "What do McDonald’s, Netflix, Google, Microsoft...",
    link: "https://medium.com/@aakele/the-modern-developers-guide-to-i18n-why-next-intl-is-changing-everything-7a459d85f6e0",
  },
  {
    title:
      "Building Theseus: A Modern, Edge-Powered URL Shortener with.........",
    excerpt: "URL shorteners seem simple at first, but.....",
    link: "https://medium.com/@aakele/building-theseus-a-modern-edge-powered-url-shortener-with-next-js-16-prisma-upstash-redis-411693ca2c06",
  },
];

const Blog = () => {
  return (
    <section
      id="blog"
      className="w-full px-4 py-4 space-y-4 bg-background text-foreground"
    >
      <h2 className="text-3xl font-semibold text-left">Blog</h2>
      {posts.map((p) => (
        <BlogCard
          key={p.title}
          title={p.title}
          excerpt={p.excerpt}
          link={p.link}
        />
      ))}
    </section>
  );
};

export default Blog;
