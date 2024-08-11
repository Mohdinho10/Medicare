/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import uploadImageCloudinary from "../utils/uploadCloudinary";
import HashLoader from "react-spinners/HashLoader";
import { useUpdateUser } from "../hooks/useUpdateUser";

function Profile({ user }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const { updatedUser, isUpdateUser } = useUpdateUser();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    gender: "",
    bloodType: "",
  });

  // const [formData, setFormData] = useState({
  //   name: user.name,
  //   email: user.email,
  //   photo: user.photo,
  //   gender: user.gender,
  //   bloodType: user.bloodType,
  // });

  const { name, email, password, gender, bloodType, photo } = formData;
  // console.log(formData);

  useEffect(() => {
    setFormData({
      name: user?.name,
      email: user?.email,
      photo: user?.photo,
      gender: user?.gender,
      bloodType: user?.bloodType,
    });
  }, [user]);

  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fileInputHandler = async (e) => {
    const file = e.target.files[0];

    const data = await uploadImageCloudinary(file);

    // console.log(data);

    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updatedUser({ userId: user._id, userData: formData });
  };
  return (
    <div className="mt-10">
      <form onSubmit={submitHandler}>
        <div className="mb-5">
          <input
            className="w-full cursor-pointer  border-b border-solid border-[#0066ff61]   py-3  text-[16px] leading-7 text-headingColor placeholder:text-textColor focus:border-b-primaryColor focus:outline-none "
            type="text"
            placeholder="Full Name"
            name="name"
            value={name}
            onChange={inputHandler}
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
            aria-readonly
            readOnly
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
          />
        </div>

        <div className="mb-5">
          <input
            className="w-full cursor-pointer  border-b border-solid border-[#0066ff61]   py-3  text-[16px] leading-7 text-headingColor placeholder:text-textColor focus:border-b-primaryColor focus:outline-none "
            type="text"
            placeholder="Blood Type"
            name="bloodType"
            value={bloodType}
            onChange={inputHandler}
          />
        </div>

        <div className="mb-5 flex items-center justify-between">
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
          {photo && (
            <figure className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-solid border-primaryColor ">
              <img src={photo} alt="avatar" className="w-full rounded-full" />
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
              {selectedFile ? selectedFile.name : "Upload a photo"}
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            disabled={isUpdateUser}
            className="w-full rounded-lg bg-primaryColor px-4 py-3 text-[18px] leading-[30px] text-white "
          >
            {isUpdateUser ? (
              <HashLoader size={35} color="#ffffff" />
            ) : (
              "Update Profile"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
