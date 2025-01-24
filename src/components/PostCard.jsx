import Link from "next/link";

const PostCard = ({ id, title }) => {
  return (
    <div className="card w-full lg:w-96 shadow-xl border">
      <div className="card-body">
        <h3>{id}</h3>
        <h2 className="text-xl font-semibold">
          <span className="text-semibold text-blue-800">Title:</span>{" "}
          <Link href={`/posts/${id}`}>
            <span className=" cursor-pointer">{title}</span>
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default PostCard;
