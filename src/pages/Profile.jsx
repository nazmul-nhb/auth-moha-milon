import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h3 className="text-2xl">My Email</h3>
            {user?.email}
        </div>
    );
};

export default Profile;