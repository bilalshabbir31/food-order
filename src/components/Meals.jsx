import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";

const requestConfig = {}

const Meals = () => {

  const { data: loadedMeals, isLoading, error } = useHttp('http://localhost:3000/meals', requestConfig, []);

  console.log(loadedMeals);
  

  if(isLoading) {
    return <p>Fetching meals....</p>
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  )
}

export default Meals;