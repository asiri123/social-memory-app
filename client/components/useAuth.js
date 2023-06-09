import { useContext } from "react";
import { AuthContext } from "./ContextProvider";

const useAuth = () => useContext(AuthContext);

export default useAuth;
