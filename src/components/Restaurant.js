import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Restaurant = () => {
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("Burger"));
  };

  return (
    <div>
      I am Restaurant
      <button onClick={() => handleAddItem()}> Add Item </button>
    </div>
  );
};

export default Restaurant;
