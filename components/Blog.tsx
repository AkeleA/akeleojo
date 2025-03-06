import { MdArrowOutward } from "react-icons/md";

type BlogPost = {
  title: string;
  date: string;
  url: string;
};

const truncateText = (text: string, maxLength: number = 28) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

const blogPosts: BlogPost[] = [
  {
    title:
      "Exploring Next.js: The Growing Choice for Developers and Vercel’s Remarkable Contribution",
    date: "June 29th, 2025",
    url: "https://medium.com/@aakele/exploring-next-js-the-growing-choice-for-developers-and-vercels-remarkable-contribution-493b0fce5171",
  },
];

const Blog = () => {
  return (
    <div className="relative z-30 max-w-lg w-full flex flex-row items-center p-4.5 rounded-md shadow-2xl">
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="w-full font-outfit">
          <h2 className="text-3xl font-semibold">
            Some &quot;blog&quot; posts
          </h2>
          <p className="text-blue-500 italic text-sm">Sometimes I write</p>
        </div>
        <div className="w-full">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row p-4.5 w-full items-center justify-between border rounded-md"
            >
              <div className="flex flex-col gap-5">
                <h3 className="font-bold text-2xl text-white group-hover:text-blue-400 transition-colors">
                  {truncateText(post.title)}
                </h3>
                <p className="text-gray-400 text-sm">{post.date}</p>
              </div>
              <MdArrowOutward className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
