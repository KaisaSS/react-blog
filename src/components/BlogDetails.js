import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog-details">
      {isLoading && <Loading />}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
