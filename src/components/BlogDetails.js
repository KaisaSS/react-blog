import { useParams, useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + data.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isLoading && <Loading />}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
