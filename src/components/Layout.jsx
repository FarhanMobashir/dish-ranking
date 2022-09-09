import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const Layout = () => {
  const { logout, user } = useAuth();
  return (
    <>
      <div>
        <h1>Welcome {user.userData.username}</h1>
        <button onClick={() => logout()}>Logout</button>
      </div>
      <Outlet />
      <h1>Footer</h1>
    </>
  );
};
