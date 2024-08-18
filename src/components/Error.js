import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();

  return (
    <div className="error-container">
      <h1>{err.statusText}</h1>
      <p>{err.status}</p>
    </div>
  );
};

export default Error;
