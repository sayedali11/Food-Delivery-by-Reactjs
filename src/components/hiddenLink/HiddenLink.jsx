import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../store/authSlice/authSlice";

// show links if login
const ShowOnLogin = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return children;
  }
  return null;
};

// show links if logout
export const ShowOnLogout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    return children;
  }
  return null;
};

export default ShowOnLogin;
