import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.productReducer.products);
  const detail = products.filter((ele) => {
    return ele.id == id;
  });

  return (
    <div>
      <div className="background">
        {detail.map((product) => {
          return (
            <div>
              <div className="header">
                <div className="order-hds">
                  <Link to="/lists" className="btn btn-light my-3">
                    <i class="fas fa-chevron-left"></i>
                  </Link>
                </div>
                <div className="cart my-2">
                  <Link
                    to="/order"
                    className="btn-carts text-decoration-none mx-3"
                  >
                    <i className="fas fa-shopping-cart"></i>
                    {/* <sup className="text-danger fw-bold text-num">
                    {props.cardData.CardItems.length}
                  </sup> */}
                  </Link>
                </div>
              </div>
              <div className="container img-bg py-4" key={product.id}>
                <Parallax
                  blur={{ min: -25, max: 25 }}
                  bgImage={product.image}
                  strength={-30}
                  bgImageAlt={product.title}
                >
                  <div style={{ height: "300px" }} />
                </Parallax>
              </div>
              <section className="container scroll bg-white">
                <span className="hcenter"></span>
                <span className="info">{product.discount}</span>
                <h2 className="fw-bold my-3">{product.title}</h2>
                <p className="fs-2">{product.price}</p>
                <p>{product.description}</p>
                <table className="table table-borderless">
                  <thead className="ftable">
                    <td className="text-muted">Size</td>
                    <td className="text-muted">Weight</td>
                    <td className="text-muted">Prepare time</td>
                  </thead>
                  <tbody>
                    <tr className="ftable">
                      <td>
                        <i className="fas fa-hamburger"></i> {product.size}
                      </td>
                      <td>
                        <i className="fas fa-weight-hanging"></i>{" "}
                        {product.weight}
                      </td>
                      <td>
                        <i className="far fa-clock"></i> {product.preparedTime}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <h2 className="fw-bold my-3">Ingrdients</h2>
                  <div className="container scrollmenu">
                    {product.ingrdients.map((ele) => (
                      <img
                        src={ele}
                        alt="pngpic"
                        className="img-veg btn btn-light"
                      />
                    ))}
                  </div>
                  <h2 className="fw-bold my-3">Bread</h2>
                  <div className="container scrollmenu">
                    {product.bread.map((ele) => (
                      <img
                        src={ele}
                        alt="pngpic"
                        className="img-veg btn btn-light"
                      />
                    ))}
                  </div>
                </div>
                <div className="row my-4">
                  <div className=" col-4 bg-mute">
                    <button className="btn btn-light">-</button>1
                    <button className="btn btn-light">+</button>
                  </div>
                  <div className="col-8">
                    <button type="button" className="addbtns text-white">
                      <i className="fas fa-shopping-cart addCart"></i>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
