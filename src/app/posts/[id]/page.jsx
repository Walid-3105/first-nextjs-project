const PostDetails = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  if (!post.id) {
    return <h2 className="text-center text-2xl mt-10">Post not found</h2>;
  }

  return (
    <div className="w-11/12 mx-auto my-10 flex justify-center">
      <div className="card glass w-96">
        <div className="card-body">
          <h2 className="card-title">Title: {post.title}</h2>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
