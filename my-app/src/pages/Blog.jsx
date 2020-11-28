import { useState, useEffect } from "react";

function Blog(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "GET",
        }
      );
      const posts = await response.json();
      setPosts(posts);
    })();
  }, []);
  return <div>Blog Page {posts.length}</div>;
}

export default Blog;
