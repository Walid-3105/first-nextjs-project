import PostCard from "../components/PostCard";

const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return (
    <div>
      <h3 className="text-3xl font-bold flex my-4 items-center justify-center">
        Posts
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto">
        {data.slice(0, 12).map((post) => (
          <PostCard key={post.id} title={post.title} id={post.id}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
