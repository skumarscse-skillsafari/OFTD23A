import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  const token = localStorage.getItem("token") || "";
  const jwt = JSON.parse(atob(token.split(".")[1]));
  const id = jwt.id;
  console.log(id);
  const deletePost = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios
      .delete(`http://localhost:5000/api/v1/posts/${e.target.id}`, {
        headers: {
          "x-access-token": token,
        },
      })
      .then(() => alert("Post deleted successfully"))
      .catch((error) => alert(error.response.data.message));
  };
  return (
    <div className="col">
      <Card style={{ width: "18rem", height: "430px", marginBottom: "15px" }}>
        <Card.Img variant="top" src={post.image} style={{ height: "150px" }} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.description}</Card.Text>
          <Card.Text>Tags: {post.tags.join(", ")}</Card.Text>
          <Card.Text>Author: {post.author}</Card.Text>
          <Card.Text>
            Created at: {new Date(post.createdAt).toLocaleDateString()}
          </Card.Text>
          <Link className="btn btn-primary" to={`/post/${post._id}`}>
            View
          </Link>{" "}
          <Link
            className="btn btn-warning"
            to={`/update/${post._id}`}
            style={{ visibility: id === post.author_id ? "visible" : "hidden" }}
          >
            Update
          </Link>{" "}
          <Button
            variant="danger"
            onClick={deletePost}
            id={post._id}
            style={{ visibility: id === post.author_id ? "visible" : "hidden" }}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
