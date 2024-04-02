import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import { PropTypes } from "prop-types";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if(loading){
        return (
            <div className="flex items-center justify-center space-x-2">
                <div className="w-6 h-6 rounded-full animate-pulse dark:bg-teal-600"></div>
                <div className="w-6 h-6 rounded-full animate-pulse dark:bg-teal-600"></div>
                <div className="w-6 h-6 rounded-full animate-pulse dark:bg-teal-600"></div>
            </div>
        )
    }
    if (user) {
        return children;
    }

    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node
}