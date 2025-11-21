// A tiny custom hook so any component can easily grap auth context

import { useContext } from "react";
import  AuthContext from "../context/AuthContext";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
