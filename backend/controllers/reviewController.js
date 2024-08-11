import Review from "../models/reviewModel.js";
import Doctor from "../models/doctorModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({});

  if (!reviews) throw new Error("No review found!");

  res.status(200).json({ message: "Reviews found", data: reviews });
});

export const createReview = asyncHandler(async (req, res) => {
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.user) req.body.user = req.userId;

  const newReview = new Review(req.body);

  const savedReview = await newReview.save();

  await Doctor.findByIdAndUpdate(req.body.doctor, {
    $push: { reviews: savedReview._id },
  });

  res.status(200).json({ message: "Review submitted", data: savedReview });
});
