import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001") // axios.get chama a rota app.get
      .then((result) => {
        setProduct(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="tab vw-100 w-50 bg-white rounded p-3">
        <div>
          {" "}
          <h2>Home Page</h2>
        </div>

        {/*  Botão que chama a tela ou rota criar usuário, usando um link */}
        <Link to="/create" className="btn btn-success">
          Add +
        </Link>

        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Discription</th>
              <th>Price</th>
              <th colSpan="2">Quantity Availablee</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              console.log(product);
              return (
                // eslint-disable-next-line react/jsx-key//
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.email}</td>
                  <td>{product.age}</td>
                  <td>
                    <Link
                      to={`/update/${product._id}`}
                      className="btnEdit btn btn-success"
                    >
                      Update
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      id="btnDelete"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
