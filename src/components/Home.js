import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new blog", body: "lorem ipsum...", author: "Kaisa", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "Daniel", id: 2 },
    { title: "Breed tips", body: "lorem ipsum...", author: "Kaisa", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
  }, []);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
