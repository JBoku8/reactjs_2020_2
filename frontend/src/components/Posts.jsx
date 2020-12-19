import { useContext } from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import configContext from "../context/configContext";

function Posts(props) {
  const [posts, loading] = useSelector((state) => [
    state.appPosts.posts,
    state.appCommon.laoding,
  ]);
  const { baseUrl } = useContext(configContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h2>Posts in DB {posts.length}</h2>
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <img
              src={`${baseUrl}${post.thumbnail.formats.thumbnail.url}`}
              alt=""
            />
            <section>
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </section>
          </article>
        );
      })}
    </div>
  );
}

export default Posts;
