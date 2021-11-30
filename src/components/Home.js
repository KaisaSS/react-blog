import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new blog", body: "lorem ipsum...", author: "Kaisa", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "Daniel", id: 2 },
    { title: "Breed tips", body: "lorem ipsum...", author: "Kaisa", id: 3 },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
