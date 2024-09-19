import { useContext } from "react";
import { currencyFormatter } from "../util/formatting.js";
import CartContext from "./store/CartContext.jsx";
import Button from "./UI/Button.jsx";

const MealItem = ({ meal }) => {
  const { addItem } = useContext(CartContext);

  function handleAddMealToCart() {
    addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
          <p>{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  )
}

export default MealItem