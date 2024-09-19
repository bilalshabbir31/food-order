import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import CartContext from "./store/CartContext";
import Button from "./UI/Button";

const Header = () => {
  const { items } = useContext(CartContext);

  const totalCartItems = items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A Resturent" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  )
}

export default Header