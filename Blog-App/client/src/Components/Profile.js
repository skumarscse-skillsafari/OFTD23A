import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  let userId = "";
  if (!token) {
    alert("User must login first");
    navigate("/signin", { replace: true });
  } else {
    const jwt = JSON.parse(atob(token?.split(".")[1]));
    console.log(jwt);
    const { id } = jwt;
    userId = id;
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/users/${userId}`)
      .then((res) => setUser(res?.data?.data))
      .catch((error) => console.log(error));
  }, []);

  const [user, setUser] = useState({});
  return (
    <div className="container">
      <h2 className="text-center display-3 mt-4">Profile Page</h2>
      <div className="text-center">
        <Button
          key="danger"
          variant="danger"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/signin", { replace: true });
          }}
        >
          Logout
        </Button>
      </div>
      <h3 className="mt-3">Username: {user?.username}</h3>
      <p>Email: {user?.email}</p>
      <Button key="warning" variant="warning">
        Edit
      </Button>
    </div>
  );
};

export default Profile;
