import Hamburger from "../assets/trans-hamburger.png";
import Wraps from "../assets/wraps.png";
import Chicken from "../assets/chicken.png";
import Ice from "../assets/icecream.png";
import Coffee from "../assets/coffee.png";

const categories = [
  {
    id: 1,
    name: "Burgers",
    color: "#EE7E33",
    image: Hamburger,
    target: "/lists",
    icon: <i className="fas fa-hamburger"></i>,
  },
  {
    id: 2,
    name: "Wraps",
    color: "#F9CC33",
    image: Wraps,
    target: "/",
    icon: <i className="fas fa-hotdog"></i>,
  },
  {
    id: 3,
    name: "Chickens",
    color: "#6DD10B",
    image: Chicken,
    target: "/",
    icon: <i className="fas fa-drumstick-bite"></i>,
  },
  {
    id: 4,
    name: "Ice Cream",
    color: "#4BB7F5",
    image: Ice,
    target: "/",
    icon: <i className="fas fa-ice-cream"></i>,
  },
  {
    id: 5,
    name: "Drinks",
    color: "#B25AC5",
    image: Coffee,
    target: "/",
    icon: <i className="fas fa-mug-hot"></i>,
  },
];

export default categories;
