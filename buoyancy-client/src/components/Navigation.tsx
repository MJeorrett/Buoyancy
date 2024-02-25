import { Link } from "react-router-dom";
import { paths } from "../router";
import {
  Icon as PhosphorIcon,
  Users,
  Toolbox,
  Lifebuoy,
  AddressBook,
} from "@phosphor-icons/react";

type NavigationLinkProps = {
  to: string;
  label: string;
  Icon: PhosphorIcon;
};

const NavigationLink = ({ to, label, Icon }: NavigationLinkProps) => {
  return (
    <li className="flex items-center space-x-3">
      <Icon size="1.5rem" />
      <Link className="cursor-pointer hover:underline text-lg" to={to}>
        {label}
      </Link>
    </li>
  );
};

const Navigation = () => {
  return (
    <div className="p-4 pr-8 border-r-2 border-black h-full">
      <h2 className="text-2xl font-semibold mb-6 flex space-x-1 items-center text-[dodgerblue]">
        <p>Buoyancy</p> <Lifebuoy display="inline" weight="duotone" />
      </h2>
      <nav>
        <ul className="space-y-4">
          <NavigationLink to={paths.people} label="People" Icon={Users} />
          <NavigationLink to={paths.projects} label="Projects" Icon={Toolbox} />
          <NavigationLink to={paths.roles} label="Roles" Icon={AddressBook} />
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
