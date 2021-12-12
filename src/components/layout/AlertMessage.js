import { Fragment, useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import { Alert } from "@mui/material";

const AlertMessage = () => {
  const alertContext = useContext(AlertContext);

  return (
    <Fragment>
      {alertContext.alert !== null && (
        <Alert severity={alertContext.alert.type}>
          {alertContext.alert.msg}
        </Alert>
      )}
    </Fragment>
  );
};

export default AlertMessage;
