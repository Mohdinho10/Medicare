import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import Doctor from "../models/doctorModel.js";
import Booking from "../models/bookingModel.js";
import generateToken from "../utils/generateToken.js";

// @desc    Register user
// @route   POST /api/users
// @access  Public
export const register = asyncHandler(async (req, res) => {
  const { email, password, name, role, gender, photo } = req.body;

  let user = null;

  if (role === "patient") {
    user = await User.findOne({ email });
  }
  if (role === "doctor") {
    user = await Doctor.findOne({ email });
  }

  // check if user exist
  if (user) {
    res.status(400);
    throw new Error("User already exists");
  }

  if (role === "patient") {
    user = await User.create({
      name,
      email,
      password,
      photo,
      gender,
      role,
    });
  }

  if (role === "doctor") {
    user = await Doctor.create({
      name,
      email,
      password,
      photo,
      gender,
      role,
    });
  }
  console.log(user);
  res.status(200).json("User registered successfully");
});

// @desc    Auth user & get token
// @route   POST  /api/users/login
// @access  Public
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // check if email and password does not exists
  if (!email || !password) {
    throw new Error("Please provide email and password", 401);
  }

  let user = null;

  const patient = await User.findOne({ email });
  const doctor = await Doctor.findOne({ email });

  // if (!patient || !doctor) {
  //   res.status(401);
  //   throw new Error("Invalid email or password");
  // }

  if (patient) user = patient;

  if (doctor) user = doctor;

  // check if user exists
  if (!user) {
    res.status(400);
    throw new Error("Invalid user data");
  }

  // If user exists
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user);

    const { password, role, appointments, ...rest } = user._doc;

    res.status(200).json({
      message: "Successfully login",
      ...rest,
      role,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Auth user & clear cookie
// @route   POST /api/users/logout
// @access  Private
export const logoutUser = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};

export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  console.log(id);
  const updatedUser = await User.findByIdAndUpdate(
    id,
    { $set: req.body },
    { new: true }
  );

  res.status(200).json(updatedUser);
});

export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await User.findByIdAndDelete(id);

  res.status(200).json("User deleted successfully");
});

export const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id).select("-password");

  if (!user) throw new Error("No User found!");

  res.status(200).json(user);
});

export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select("-password");

  if (!users) throw new Error("No User found!");

  res.status(200).json(users);
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.userId);

  if (!user) throw new Error("User not found");

  const { password, ...rest } = user._doc;

  res.status(200).json({
    ...rest,
  });
});

export const getMyAppointments = asyncHandler(async (req, res) => {
  // Retrieve appointments from booking
  const bookings = await Booking.find({ user: req.userId });
  // extract doctor id's from appointment bookings
  const doctorIds = bookings.map((el) => el.doctor.id);
  // retrieve doctors using doctor id
  const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
    "-password"
  );

  if (!doctors) throw new Error("No doctor appointments found");

  res.status(200).json(doctors);
});
