import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import CartContext from "./store/CartContext";
import Button from "./UI/Button";
import UserProgressContext from "./store/UserProgressContext";

const Header = () => {
  const { items } = useContext(CartContext);
  const { showCart } = useContext(UserProgressContext);

  const totalCartItems = items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A Resturent" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  )
}

export default Header