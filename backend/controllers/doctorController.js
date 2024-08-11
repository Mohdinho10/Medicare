import asyncHandler from "../middleware/asyncHandler.js";
import Booking from "../models/bookingModel.js";
import Doctor from "../models/doctorModel.js";

export const updateDoctor = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const updatedDoctor = await Doctor.findByIdAndUpdate(
    id,
    { $set: req.body },
    { new: true }
  );

  res.status(200).json(updatedDoctor);
});

export const deleteDoctor = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await Doctor.findByIdAndDelete(id);

  res.status(200).json("Doctor deleted successfully");
});

export const getDoctor = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const doctor = await Doctor.findById(id)
    .populate("reviews")
    .select("-password");

  if (!doctor) throw new Error("No doctor found!");

  res.status(200).json(doctor);
});

export const getDoctors = asyncHandler(async (req, res) => {
  const { query } = req.query;

  let doctors;

  if (query) {
    doctors = await Doctor.find({
      isApproved: "approved",
      $or: [
        { name: { $regex: query, $options: "i" } },
        { specialization: { $regex: query, $options: "i" } },
      ],
    }).select("-password");
  } else {
    doctors = await Doctor.find({ isApproved: "approved" }).select("-password");
  }

  if (!doctors) throw new Error("No Doctor found!");

  res.status(200).json(doctors);
});

export const getDoctorProfile = asyncHandler(async (req, res) => {
  const doctorId = req.userId;

  const doctor = await Doctor.findById(req.userId);

  if (!doctor) throw new Error("Doctor not found");

  const { password, ...rest } = doctor._doc;

  const appointments = await Booking.find({ doctor: doctorId });

  res.status(200).json({
    ...rest,
    appointments,
  });
});
