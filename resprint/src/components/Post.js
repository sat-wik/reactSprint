import { useEffect } from "react";
import "./Post.css"

export default function Post({ data }) {
  return (
    <div className="post--container">
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
