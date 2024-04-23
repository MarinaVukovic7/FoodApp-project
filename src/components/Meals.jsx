import Meal from './Meal.jsx';
import MEALS from '../../data/meals.json';

export default function Meals () {

  return (
    <ul id="meals">
      {MEALS.map(meal => (
      <Meal key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}