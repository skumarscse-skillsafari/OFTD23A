import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/posts/${id}`)
      .then((res) => setPost(res.data.data))
      .catch((error) => alert(error.response.data.message));
  }, []);
  return (
    <div className="container">
      <h2 className="display-3 text-center mt-3">Single Post </h2>
      <Card>
        <Card.Img variant="top" src={post.image} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.description}</Card.Text>
          <Card.Text>Tags: {post.tags.join(", ")}</Card.Text>
          <Card.Text>Author: {post.author}</Card.Text>
          <Card.Text>
            Created at: {new Date(post.createdAt).toLocaleDateString()}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SinglePost;
