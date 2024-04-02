import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(name, email, password, accepted);
}
    return (
        <section className="space-y-6 flex flex-col justify-center items-center mt-8">
            <h2 className="text-2xl font-medium">Please, Register</h2>
            <form onSubmit={handleRegister} className="flex flex-col gap-6">
                <input className="p-2 rounded-lg border border-red-950" type="text" name="name" placeholder="Your Name" required />
                <input className="p-2 rounded-lg border border-red-950" type="email" name="email" placeholder="Your Email" required />
                <div className="relative">
                    <input className="p-2 rounded-lg w-full border border-red-950" type={"password"} name="password" placeholder="Your Password" required />
                    <span className="absolute top-1/2 right-2 -translate-y-1/2" ><FaEyeSlash /> <FaEye /></span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">Accept Our <Link>Terms & Conditions</Link></label>
                </div>
                <button className="bg-[#23BE0A] text-base md:text-xl font-semibold text-white border border-[#23BE0A] rounded-xl w-full p-2 hover:bg-transparent hover:text-[#23BE0A] transition duration-500 flex justify-center items-center">Register</button>
            </form>

            <p className="font-medium">Already have an Account? Please, <Link to={'/login'}>Login Here!</Link></p>
        </section>
    );
};

export default Register;