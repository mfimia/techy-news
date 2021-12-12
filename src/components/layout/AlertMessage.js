import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import { Alert } from "@mui/material";

const AlertMessage = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alert !== null && (
      <Alert severity="warning">{alertContext.alert.msg}</Alert>
    )
  );
};

export default AlertMessage;
