import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import appStore from "./utils/appStore";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Restaurant />
      <div>Hi I am redux boiler plate</div>;
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// // root.render(<AppLayout />);

// root.render(<RouterProvider router={appRouter} />);
