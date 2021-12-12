import { Fragment } from "react";
import spinner from "../../assets/spinner.gif";

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt="Loading..."
      style={{
        width: "200px",
        margin: "auto",
        display: "block",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  </Fragment>
);

export default Spinner;
