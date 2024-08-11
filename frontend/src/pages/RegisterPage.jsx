import { useState } from "react";
import signupImg from "../assets/images/signup.gif";
// import avatar from "../assets/images/doctor-img01.png";
import { Link } from "react-router-dom";
import uploadImageCloudinary from "../utils/uploadCloudinary";
import { useRegister } from "../hooks/useRegister";
import HashLoader from "react-spinners/HashLoader";
// import { toast } from "react-toastify";

function RegisterPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");

  const { register, isRegister } = useRegister();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    // confirmPassword: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });

  const { name, email, password, gender, role } = formData;

  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fileInputHandler = async (e) => {
    const file = e.target.files[0];

    const data = await uploadImageCloudinary(file);

    // console.log(data);
    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = (e) => {
    // console.log(formData);
    // if (password !== confirmPassword) {
    //   toast.error("Passwords do not match");
    //   return;
    // }

    register(formData);
    e.preventDefault();
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="mx-auto max-w-[1170px] ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* img box */}
          <div className="hidden rounded-l-lg bg-primaryColor lg:block">
            <figure className="rounded-l-lg">
              <img
                src={signupImg}
                alt="sign-up"
                className="w-full rounded-l-lg"
              />
            </figure>
          </div>

          {/* Sign up form */}
          <div className="rounded-l-lg py-10 lg:pl-16">
            <h3 className="mb-10 text-[22px] font-bold leading-9 text-headingColor ">
              Create an <span className="text-primaryColor">account</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  className="w-full cursor-pointer  border-b border-solid border-[#0066ff61]   py-3  text-[16px] leading-7 text-headingColor placeholder:text-textColor focus:border-b-primaryColor focus:outline-none "
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={name}
                  onChange={inputHandler}
                  required
                />
              </div>

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

              {/* <div className="mb-5">
                <input
                  className="w-full cursor-pointer  border-b border-solid border-[#0066ff61]   py-3  text-[16px] leading-7 text-headingColor placeholder:text-textColor focus:border-b-primaryColor focus:outline-none "
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={inputHandler}
                  required
                />
              </div> */}

              <div className="mb-5 flex items-center justify-between">
                <label className="text-[16px] font-bold leading-7 text-headingColor ">
                  Are you a:
                  <select
                    required
                    onChange={inputHandler}
                    value={role}
                    name="role"
                    id="role"
                    className="px-4 py-3 text-[15px] font-semibold leading-7 text-textColor focus:outline-none "
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label className="text-[16px] font-bold leading-7 text-headingColor ">
                  Gender:
                  <select
                    onChange={inputHandler}
                    value={gender}
                    name="gender"
                    id="gender"
                    className="px-4 py-3 text-[15px] font-semibold leading-7 text-textColor accent-[#0066ff61] focus:outline-none "
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                {selectedFile && (
                  <figure className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-solid border-primaryColor ">
                    <img
                      src={previewURL}
                      alt="avatar"
                      className="w-full rounded-full"
                    />
                  </figure>
                )}

                <div className="relative h-[50px] w-[130px] ">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    accept=".jpg,.png"
                    onChange={fileInputHandler}
                    className="absolute top-0 h-full w-full cursor-pointer opacity-0"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute left-0 top-0 flex h-full w-full cursor-pointer items-center overflow-hidden truncate rounded-lg bg-[#0066ff46] px-[0.75rem] py-[0.375rem] text-[15px] font-semibold leading-6 text-headingColor "
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                  disabled={isRegister}
                  className="w-full rounded-lg bg-primaryColor px-4 py-3 text-[18px] leading-[30px] text-white "
                >
                  {isRegister ? (
                    <HashLoader size={35} color="#ffffff" />
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>

              <p className="mt-5 text-center text-textColor">
                Already have an account? &nbsp;
                <Link
                  to="/login"
                  className="ml-1 font-medium text-primaryColor"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
