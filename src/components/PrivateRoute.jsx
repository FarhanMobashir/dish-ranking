import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const PrivateRoute = ({ element }) => {
  const { user } = useAuth();
  if (user.isLoggedIn) {
    return element;
  } else {
    return <Navigate to="/" />;
  }
};
