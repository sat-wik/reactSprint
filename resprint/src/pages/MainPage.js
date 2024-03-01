import { Button } from "@mui/material";
import { useState } from "react";
import Post from "../components/Post";
import getPost from "../functions/getPost";
import "./MainPage.css";

export default function MainPage() {
  const [posts, setPosts] = useState([]);

  const onClick = async () => {
    const data = await getPost(posts.length);
    setPosts((prev) => [...prev, { data }]);
  };

  console.log(posts);

  return (
    <div>
      <Button onClick={onClick}>Generate Post</Button>
      <div className="wrapper">
        {posts.map((post) => (
          <Post key={post.data.id} data={post.data} />
        ))}
      </div>
    </div>
  );
}
