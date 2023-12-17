import { ErrorResponse, Link, useRouteError } from "react-router-dom";

export function Error() {
  const error = useRouteError() as ErrorResponse;

  return (
    <div>
      <h1>Oops!</h1>

      <p>Sorry, an unexpected error has occurred.</p>

      <p>
        <i>{error.data}</i>
      </p>

      <p>
        <Link to={"/"}>Go to Home</Link>
      </p>
    </div>
  );
}
