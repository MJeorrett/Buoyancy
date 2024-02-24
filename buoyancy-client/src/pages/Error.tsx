import { Link, useRouteError } from "react-router-dom";
import { paths } from "../router";

const ErrorPage = () => {
  const error = useRouteError() as { statusText: string; message: string };
  return (
    <>
      <h1>Something no workey...soz.</h1>
      <p>
        Go back <Link to={paths.home}>home</Link>.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
};

export default ErrorPage;
