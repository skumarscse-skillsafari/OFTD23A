const Projects = ({ users }) => {
  // props = { users: [...]}
  // {users} = props
  // console.log(props.users);
  return (
    <>
      <ol>
        <li>To-do List</li>
        <li>Product Listing</li>
        <li>Task Manager</li>
      </ol>
      <hr />
      {users.map((user, index) => {
        return (
          <div key={index}>
            <h2>Username: {user.username}</h2>
            <p>Age: {user.age}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default Projects;
