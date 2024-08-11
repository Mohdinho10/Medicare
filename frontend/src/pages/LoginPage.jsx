import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import HashLoader from "react-spinners/HashLoader";

function LoginPage() {
  const { login, isLogin } = useLogin();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  //  const inputHandler = (event) => {
  //    setFormData((prevState) => ({
  //      ...prevState,
  //      [event.target.id]: event.target.value,
  //    }));
  //  };

  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="mx-auto w-full max-w-[570px] rounded-lg shadow-md md:p-10 ">
        <h3 className="mb-10 text-[22px] font-bold leading-9 text-headingColor ">
          Hello <span className="text-primaryColor">Welcome</span> Back
        </h3>

        <form className="py-4 md:py-0" onSubmit={submitHandler}>
          <div className="mb-5">
            <input
              className="w-full cursor-pointer  border-b border-solid border-[#0066ff61]   py-3  text-[16px] leading-7 text-headingColor placeholder:text-textColor focus:border-b-primaryColor focus:outline-none "
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={email}
              onChange={inputHandler}
              required
            />
          </div>

          <div className="mb-5">
            <input
              className="w-full cursor-pointer  border-b border-solid border-[#0066ff61]   py-3  text-[16px] leading-7 text-headingColor placeholder:text-textColor focus:border-b-primaryColor focus:outline-none "
              type="password"
              placeholder="Enter your Password"
              name="password"
              value={password}
              onChange={inputHandler}
              required
            />
          </div>

          <div className="mt-7">
            <button className="w-full rounded-lg bg-primaryColor px-4 py-3 text-[18px] leading-[30px] text-white ">
              {isLogin ? <HashLoader size={35} color="#ffffff" /> : "Login"}
            </button>
          </div>

          <p className="mt-5 text-center text-textColor">
            Don&apos; t have an account? &nbsp;
            <Link to="/register" className="ml-1 font-medium text-primaryColor">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
