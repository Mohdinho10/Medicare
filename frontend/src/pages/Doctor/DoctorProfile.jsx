/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import uploadImageCloudinary from "../../utils/uploadCloudinary";
import { useUpdateDoctor } from "../../hooks/useUpdateDoctor";
import HashLoader from "react-spinners/HashLoader";

function DoctorProfile({ doctorData }) {
  const { updateDoctor, isUpdateDoctor } = useUpdateDoctor();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: null,
    qualifications: [
      // { startingDate: "", endingDate: "", degree: "", university: "" },
    ],
    experiences: [
      // { startingDate: "", endingDate: "", position: "", hospital: "" },
    ],
    timeSlots: [
      // { day: "", startingTime: "", endingTime: "" }
    ],
    about: "",
    photo: null,
  });

  useEffect(() => {
    setFormData({
      name: doctorData?.name,
      email: doctorData?.email,
      phone: doctorData?.phone,
      bio: doctorData?.bio,
      gender: doctorData?.gender,
      specialization: doctorData?.specialization,
      ticketPrice: doctorData?.ticketPrice,
      qualifications: doctorData?.qualifications,
      experiences: doctorData?.experiences,
      timeSlots: doctorData?.timeSlots,
      about: doctorData?.about,
      photo: doctorData?.photo,
    });
  }, [doctorData]);

  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fileInputHandler = async (e) => {
    const file = e.target.files[0];
    const data = await uploadImageCloudinary(file);

    // console.log(data);
    setFormData({ ...formData, photo: data?.url });
  };

  const updateProfileHandler = (e) => {
    e.preventDefault();

    updateDoctor({ doctorId: doctorData._id, doctorData: formData });
  };

  // This a reusable function for adding items
  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  // This a reusable function for delete items
  const deleteItem = (key, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i !== index),
    }));
  };

  // This is for handling input change
  const handleReusableInputChange = (key, index, event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      const updateItems = [...prevFormData[key]];

      updateItems[index][name] = value;

      return {
        ...prevFormData,
        [key]: updateItems,
      };
    });
  };

  const addQualification = (e) => {
    e.preventDefault();

    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "",
      university: "",
    });
  };

  const handleQualificationChange = (event, index) => {
    handleReusableInputChange("qualifications", index, event);
  };

  const deleteQualification = (e, index) => {
    e.preventDefault();
    deleteItem("qualifications", index);
  };

  // Experiences
  const addExperience = (e) => {
    e.preventDefault();

    addItem("experiences", {
      startingDate: "",
      endingDate: "",
      position: "",
      hospital: "",
    });
  };

  const handleExperienceChange = (event, index) => {
    handleReusableInputChange("experiences", index, event);
  };

  const deleteExperience = (e, index) => {
    e.preventDefault();
    deleteItem("experiences", index);
  };

  // Time Slots
  const addTimeSlot = (e) => {
    e.preventDefault();

    addItem("timeSlots", {
      day: "Saturday",
      startingTime: "10:00",
      endingTime: "11:30",
    });
  };

  const handleTimeSlotChange = (event, index) => {
    handleReusableInputChange("timeSlots", index, event);
  };

  const deleteTimeSlot = (e, index) => {
    e.preventDefault();
    deleteItem("timeSlots", index);
  };

  return (
    <div>
      <h2 className="mb-10 text-[24px] font-bold leading-9 text-headingColor ">
        Profile Information
      </h2>
      <form onSubmit={updateProfileHandler}>
        <div className="mb-5">
          <p className="form__label">Name</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Full name"
            className="form__input"
            onChange={inputHandler}
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Email</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            className="form__input"
            onChange={inputHandler}
            readOnly
            aria-readonly
            disabled
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Phone number</p>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            placeholder="Phone number"
            className="form__input"
            onChange={inputHandler}
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Bio</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            placeholder="Bio"
            className="form__input"
            onChange={inputHandler}
            maxLength={100}
          />
        </div>

        <div className="mb-5">
          <div className="mb-[30px] grid grid-cols-3 gap-5 ">
            <div>
              <p className="form__label">Gender</p>
              <select
                name="gender"
                value={formData.gender}
                className="form__input py-3.5"
                onChange={inputHandler}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <p className="form__label">Specialization</p>
              <select
                name="specialization"
                value={formData.specialization}
                className="form__input py-3.5"
                onChange={inputHandler}
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>

            <div>
              <p className="form__label">Ticket price</p>
              <input
                type="number"
                placeholder="100"
                name="ticketPrice"
                value={formData.ticketPrice}
                className="form__input"
                onChange={inputHandler}
              />
            </div>
          </div>
        </div>
        {/* Qualifications */}
        <div className="mb-5">
          <p className="form__label">Qualifications</p>
          {formData?.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Starting Date</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form__input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>

                  <div>
                    <p className="form__label">Starting Date</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form__input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Degree</p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      className="form__input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>

                  <div>
                    <p className="form__label">University</p>
                    <input
                      type="text"
                      name="university"
                      value={item.university}
                      className="form__input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>

                <button
                  onClick={(e) => deleteQualification(e, index)}
                  className="mb-[30px] mt-2 cursor-pointer rounded-full bg-red-600 p-2 text-[18px] text-white "
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addQualification}
            className="h-fit cursor-pointer rounded bg-[#000] px-5 py-2 text-white "
          >
            Add Qualification
          </button>
        </div>

        {/* Experiences*/}
        <div className="mb-5">
          <p className="form__label">Experiences</p>
          {formData?.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Starting Date</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form__input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>

                  <div>
                    <p className="form__label">Starting Date</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form__input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Position</p>
                    <input
                      type="text"
                      name="position"
                      value={item?.position}
                      className="form__input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>

                  <div>
                    <p className="form__label">Hospital</p>
                    <input
                      type="text"
                      name="hospital"
                      value={item.hospital}
                      className="form__input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>

                <button
                  onClick={(e) => deleteExperience(e, index)}
                  className="mb-[30px] mt-2 cursor-pointer rounded-full bg-red-600 p-2 text-[18px] text-white "
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addExperience}
            className="h-fit cursor-pointer rounded bg-[#000] px-5 py-2 text-white "
          >
            Add Experience
          </button>
        </div>

        {/* Time slots*/}
        <div className="mb-5">
          <p className="form__label">Time Slots</p>
          {formData?.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="mb-[30px] grid grid-cols-2 gap-5 md:grid-cols-4  ">
                  <div>
                    <p className="form__label">Day</p>
                    <select
                      name="day"
                      value={item.day}
                      className="form__input py-3.5"
                      onChange={(e) => handleTimeSlotChange(e, index)}
                    >
                      <option value="">Select</option>
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                    </select>
                  </div>

                  <div>
                    <p className="form__label">Starting Time</p>
                    <input
                      type="time"
                      name="startingTime"
                      value={item.startingTime}
                      className="form__input"
                      onChange={(e) => handleTimeSlotChange(e, index)}
                    />
                  </div>

                  <div>
                    <p className="form__label">Ending Time</p>
                    <input
                      type="time"
                      name="endingTime"
                      value={item.endingTime}
                      className="form__input"
                      onChange={(e) => handleTimeSlotChange(e, index)}
                    />
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={(e) => deleteTimeSlot(e, index)}
                      className="mt-6 cursor-pointer rounded-full bg-red-600 p-2 text-[18px] text-white "
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={addTimeSlot}
            className="h-fit cursor-pointer rounded bg-[#000] px-5 py-2 text-white "
          >
            Add TimeSlot
          </button>
        </div>

        {/* About */}
        <div className="mb-5">
          <p className="form__label">About</p>
          <textarea
            name="about"
            cols="30"
            rows="5"
            value={formData.about}
            placeholder="write about you"
            onChange={inputHandler}
            className="form__input resize-none"
          />
        </div>

        {/* Profile photo */}
        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-solid border-primaryColor ">
              <img
                src={formData.photo}
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
          <button className="w-full rounded-lg bg-primaryColor px-4 py-3 text-[18px] leading-[30px] text-white">
            {isUpdateDoctor ? (
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

export default DoctorProfile;
