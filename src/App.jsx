import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      console.log(data);
    }
    fetchApi();
  }, []);

  return (
    <div className="app-container">
      <h1>Product </h1>
      <div className="grid-container">
        {data.map((product) => (
          <div className="product-card" key={product.id}>
            <h2>{product.title}</h2>
            <p className="price">RS : {product.price}</p>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <p className="description">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
