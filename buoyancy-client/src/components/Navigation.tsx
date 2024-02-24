import { Link } from "react-router-dom";
import { paths } from "../router";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={paths.projects}>Projects</Link>
        </li>
        <li>
          <Link to={paths.people}>People</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
