import { Link } from "react-router-dom";
import { paths } from "../router";

type NavigationLinkProps = {
  to: string;
  label: string;
};

const NavigationLink = ({ to, label }: NavigationLinkProps) => {
  return (
    <li>
      <Link className="cursor-pointer hover:underline text-lg" to={to}>
        {label}
      </Link>
    </li>
  );
};

const Navigation = () => {
  return (
    <div className="p-4 pr-8 border-r-2 border-black h-full">
      <h2 className="text-2xl font-semibold mb-4">Buoyancy</h2>
      <nav>
        <ul className="space-y-4">
          <NavigationLink to={paths.projects} label="Projects" />
          <NavigationLink to={paths.people} label="People" />
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
