import React from "react";
import { Link } from "react-router-dom";
import HeaderContainer from "../container/HeaderContainer";
import Footer from "./Footer";
import categories from "../assets/categories";

const Home = () => {
  function menuList(category) {
    const color = category.color;
    return (
      <div key={category.id}>
        <div className="col-12 card-category">
          <div className="card">
            <div className="card-img">
              <div
                style={{
                  height: "170px",
                  backgroundColor: color,
                  borderRadius: "20px",
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingTop: "15px",
                }}
              >
                <img
                  width="100px"
                  height="80px"
                  className="mx-3"
                  src={category.image}
                  alt={category.name}
                />
              </div>
            </div>
            <div className="card-img-overlay">
              <Link to={category.target} className="text-decoration-none">
                <span className="card-title fw-bold fs-2 text-white">
                  {category.name}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <main className="container p-2">
        <header className="header">
          <HeaderContainer />
        </header>
        <section>
          <div className="container pt-4">
            <h1 className="fw-bold">Discover</h1>
            <h2 className="fw-bold">New Flavors</h2>
          </div>
        </section>
        <section>
          <div className="container pt-3">
            <div className="row">
              <div className="col-10">
                <div className="input-group rounded">
                  <span
                    className="input-group-text bg-light border-0"
                    id="search-addon"
                  >
                    <i className="fas fa-search"></i>
                  </span>
                  <input
                    type="search"
                    className="form-control rounded bg-light border-0 "
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                </div>
              </div>
              <div className="setting col-2">
                <i className="fas fa-sliders-h"></i>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container pt-3">
            <p className="txt-gray text-uppercase">Categories</p>
            <div>
              <div className="row">{categories.map(menuList)}</div>
            </div>
          </div>
        </section>
        <section className="container-fluid navigation">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Home;
