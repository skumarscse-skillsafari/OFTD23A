import Projects from "./Projects";
import { products, users } from "../data";

const About = () => {
  console.log(products);
  return (
    <div className="about">
      <h2>About Component</h2>
      <p>This is about component paragraph</p>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>Product Name: {product.name}</h2>
            <p>Rating:{product.rating} </p>
            <hr />
          </div>
        );
      })}
      <Projects users={users} />
    </div>
  );
};

export default About;
