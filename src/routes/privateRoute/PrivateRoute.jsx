import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PulseLoader } from "react-spinners";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation();
    // #B91C1C
    if (loading) {
        return (
            <div className="min-h-[100px] flex items-center justify-center">
                <PulseLoader color="#B91C1C" />
            </div>
        )
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;