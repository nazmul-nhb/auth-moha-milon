import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <section className="space-y-6 flex flex-col justify-center items-center mt-8">
            <h2 className="text-2xl font-medium">Please, Login</h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-6">
                <input className="p-2 rounded-lg border border-red-950" type="email" name="email" placeholder="Your Email" required />
                <div className="relative">
                    <input className="p-2 rounded-lg w-full border border-red-950" type={"password"} name="password" placeholder="Your Password" required />
                    <span className="absolute top-1/2 right-2 -translate-y-1/2" ><FaEyeSlash /> <FaEye /></span>
                </div>
                <a href="#">Forgot Password?</a>
                <button className="bg-[#23BE0A] text-base md:text-xl font-semibold text-white border border-[#23BE0A] rounded-xl w-full p-2 hover:bg-transparent hover:text-[#23BE0A] transition duration-500 flex justify-center items-center">Login</button>
            </form>

            <p className="font-medium">New to Moha Milon? Please, <Link to={'/register'}>Register Here!</Link></p>
        </section>
    );
};

export default Login;