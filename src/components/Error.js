import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <div>
      <h1>Oops!!</h1>
      <h3>Something went wrong...</h3>
      <h3>{status + ": " + statusText}</h3>
    </div>
  );
};

export default Error;
