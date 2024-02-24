import { Link, useRouteError } from "react-router-dom";
import { paths } from "../router";
import PageHeading from "../components/PageHeading";

const ErrorPage = () => {
  const error = useRouteError() as { statusText: string; message: string };
  return (
    <>
      <PageHeading>Something no workey...soz.</PageHeading>
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
