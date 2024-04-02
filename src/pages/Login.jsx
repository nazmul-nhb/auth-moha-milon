import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { loginUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        // login user
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate('/profile')
            })
            .catch(error => console.error(error))
    }
    
    const handleGoogleSignIn =() => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/profile')
            })
            .catch(error => console.error(error))
    }

    return (
        <section className="space-y-6 flex flex-col justify-center items-center mt-8">
            <h2 className="text-2xl font-medium">Please, Login</h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-6">
                <input className="p-2 rounded-lg border border-red-950" type="email" name="email" placeholder="Your Email" required />
                <div className="relative">
                    <input className="p-2 rounded-lg w-full border border-red-950" type={showPassword ? "text" : "password"} name="password" placeholder="Your Password" required />
                    <span onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-2 -translate-y-1/2">{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
                <a href="#">Forgot Password?</a>
                <button className="bg-[#23BE0A] text-base md:text-xl font-semibold text-white border border-[#23BE0A] rounded-xl w-full p-2 hover:bg-transparent hover:text-[#23BE0A] transition duration-500 flex justify-center items-center">Login</button>
            </form>
            <button onClick={handleGoogleSignIn} className="bg-[#23BE0A] text-base md:text-xl font-semibold text-white border border-[#23BE0A] rounded-xl p-2 hover:bg-transparent hover:text-[#23BE0A] transition duration-500 flex justify-center items-center">Google Login</button>

            <p className="font-medium">New to Moha Milon? Please, <Link to={'/register'}>Register Here!</Link></p>
        </section>
    );
};

export default Login;