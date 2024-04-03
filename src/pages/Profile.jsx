import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { sendEmailVerification } from "firebase/auth";

const Profile = () => {
    const { user } = useContext(AuthContext);

    // send verification email if not verified
    const handleVerifyEmail = () => {
        sendEmailVerification(user)
            .then(() => {
                alert('Please, check your email and verify it')
            })
    }

    return (
        <div className="flex flex-col gap-4 items-center justify-center mt-8">
            <h3 className="text-2xl">My Email: {user?.email}</h3>
            {
                !user.emailVerified && <button onClick={handleVerifyEmail} className="bg-[#23BE0A] text-base md:text-xl font-semibold text-white border border-[#23BE0A] rounded-xl p-2 hover:bg-transparent hover:text-[#23BE0A] transition duration-500 flex justify-center items-center">Verify Email</button>
            }
        </div>
    );
};

export default Profile;