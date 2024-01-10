import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div>I am header. There are total {cartItems.length} items in the cart</div>
  );
};
export default Header;
