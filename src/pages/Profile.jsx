import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
    const authInfo = useContext(AuthContext)
    return (
        <div>
            {authInfo.name}
        </div>
    );
};

export default Profile;