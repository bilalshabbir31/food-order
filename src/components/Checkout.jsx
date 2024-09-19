import { useContext } from "react";
import CartContext from "./store/CartContext"
import Modal from "./UI/Modal"
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "./store/UserProgressContext";

const Checkout = () => {

  const { items } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(UserProgressContext);

  const cartTotal = items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)

  return (
    <Modal open={progress === 'checkout'} onClose={hideCheckout}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type='text' id="full-name"/>
        <Input label="Email Address" type='email' id="email" />
        <Input label="Street" type='text' id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type='text' id="city" />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={hideCheckout}>Close</Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  )
}

export default Checkout