import { connect } from "react-redux";
import addtoCart from "../store/Actions/action";
import Listing from "../components/Listing";

const mapStateToProps = (state) => ({
  cardData: state,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler(data) {
    dispatch(addtoCart(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
