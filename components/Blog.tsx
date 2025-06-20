import { AnimatedGrid } from "./Animated Grid";
import BlogCard from "@/components/BlogCard";

const posts = [
  {
    title:
      "Exploring Next.js: The Growing Choice for Developers and Vercel’s Remarkable Contribution",
    excerpt: "In the ever-evolving world of web development...",
    link: "https://medium.com/@aakele/exploring-next-js-the-growing-choice-for-developers-and-vercels-remarkable-contribution-493b0fce5171",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="w-full px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-4">Blog</h2>
      <AnimatedGrid>
        {posts.map((p) => (
          <BlogCard
            key={p.title}
            title={p.title}
            excerpt={p.excerpt}
            link={p.link}
          />
        ))}
      </AnimatedGrid>
    </section>
  );
};

export default Blog;
