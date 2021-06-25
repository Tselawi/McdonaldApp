import React from "react";
import HeaderContainer from "../container/HeaderContainer";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import categories from "../assets/categories";
import products from "../assets/products";

const Listing = (props) => {
  function scrollCategory(items) {
    return (
      <>
        <Link key={items.id} className="icon-list" to={items.target}>
          {items.icon}
        </Link>
      </>
    );
  }
  console.log(props.cardData.CardItems.length);
  function cardMenu(product) {
    return (
      <div>
        <div className="card p-3">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
            width="80px"
            height="100px"
          />
          <div className="card-body">
            <Link
              key={product.id}
              to={`/details/${product.id}`}
              className="text-decoration-none text-dark"
            >
              <h5 className="card-title fw-bold fs-6 text-center">
                {product.title}
              </h5>
            </Link>
            {/* <div className="card-img-overlay">{product.discount}</div> */}
            <div className="d-flex justify-content-around fw-bold">
              <p className="my-2">{product.price}</p>
              <button
                className="btn btn-light"
                onClick={() => {
                  props.addToCartHandler({ product });
                }}
              >
                <i className="fas fa-shopping-cart addCart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="container p-2">
        <header className="header">
          <HeaderContainer />
        </header>
      </div>
      <section>
        <div className="container">
          <p className="text-muted">Hey Mike,</p>
          <h1 className="fw-bold display-6">
            Choose Your <br /> Best Meal
          </h1>
        </div>
      </section>
      <section>
        <div className="container justify-content-center scrollmenu">
          <div>{categories.map(scrollCategory)}</div>
        </div>
      </section>
      <section>
        <div className="container pt-4">
          <div className="d-flex justify-content-between">
            <h1 className="fw-bold fs-1">Popular</h1>
            <ul className="d-flex pt-1 list-unstyled">
              <li className="fw-bold mx-3">Top</li>
              <li className="text-muted">New</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-4 parent">{products.map(cardMenu)}</div>
      </section>
      <section className="container-fluid my-5 py-4">
        <div className="navigation">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Listing;
