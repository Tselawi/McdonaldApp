import React, { useState, useParams } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import products from "../assets/products";

const Order = () => {
  const [number, setNumber] = useState(0);
  function increment() {
    setNumber(number + 1);
  }
  function decrement() {
    setNumber(number > 0 ? number - 1 : null);
  }
  // const { id } = useParams();
  const products = useSelector((state) => state.orderReducer.products);

  const detaiLs = products.filter((product) => {
    return product.id;
  });

  return (
    <div>
      <div className="container pt-4">
        <header className="order-hd">
          <Link to="/lists" className="btn btn-light">
            <i class="fas fa-chevron-left"></i>
          </Link>
          <h4 className="my-2">Your Order</h4>
        </header>
        <section>
          {detaiLs.map((product) => {
            return (
              <>
                <table className="my-4">
                  <tbody className="table-position">
                    <tr>
                      <td>
                        <img
                          src={product.image}
                          alt={product.name}
                          width="80px"
                        />
                      </td>
                      <td>
                        <p className="fw-bold my-2">{product.title}</p>
                        <button
                          className="btn btn-light bts mx-3"
                          onClick={increment}
                        >
                          +
                        </button>
                        <span className="fs-7">{number}</span>
                        <button
                          className="btn btn-light bts mx-3"
                          onClick={decrement}
                        >
                          -
                        </button>
                      </td>
                      <td className="pt-4">{product.price}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            );
          })}
        </section>
        <section className="container-fluid bg-white footer-order">
          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled text-muted">
                <li>Items</li>
                <li>Discount</li>
                <li>Cost</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled text-end">
                <li>20.60$</li>
                <li>-0.70$</li>
                <li>19.90$</li>
              </ul>
            </div>
          </div>
          <button type="button" className="btn btn-warning  form-control">
            <span className="mx-4 fw-bold">Payment & Delivery</span>
            {"  "}
            <i className="fas fa-arrow-right"></i>
          </button>
        </section>
      </div>
    </div>
  );
};

export default Order;
