import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

const Root = () => {
  return (
    <div>
      <Navigation />
      <h1>Buoyancy</h1>
      <Outlet />
    </div>
  );
};

export default Root;
