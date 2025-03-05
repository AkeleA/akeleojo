const Blog = () => {
  return (
    <div className="relative z-30 border border-red-500 max-w-lg w-full flex flex-row items-center p-4.5 rounded-md shadow-2xl">
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="w-full">
          <h2 className="text-xl font-semibold">Blog posts</h2>
          <p className="text-blue-900 italic text-sm">Sometimes I write</p>
        </div>
        <div className="flex flex-col w-full p-4 border rounded-md my-2">
          <h3 className="font-semibold">NextJs</h3>
          <h3 className="text-gray-500">NextJs</h3>
        </div>
      </div>
    </div>
  );
};

export default Blog;
