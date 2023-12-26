// Import necessary dependencies
import {jwtDecode} from "jwt-decode";

const checkAuthenticationStatus = () => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const isTokenExpired = Date.now() >= decodedToken.exp * 1000;

      if (!isTokenExpired) {
        return true;
      }
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }

  return false;
};

export default checkAuthenticationStatus;
