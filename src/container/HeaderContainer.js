import { connect } from "react-redux";
import addtoCart from "../store/Actions/action";
import Header from "../components/Header";
const mapStateToProps = (state) => ({
  cardData: state,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler(data) {
    dispatch(addtoCart(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
