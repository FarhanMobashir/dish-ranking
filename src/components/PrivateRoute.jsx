import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const PrivateRoute = ({ element }) => {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return element;
  } else {
    return <Navigate to="/" />;
  }
};
