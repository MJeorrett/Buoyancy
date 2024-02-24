import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

const Root = () => {
  return (
    <div className="h-screen flex">
      <Navigation />
      <div className="h-screen w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
