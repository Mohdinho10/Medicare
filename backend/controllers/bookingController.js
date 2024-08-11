import User from "../models/userModel.js";
import Doctor from "../models/doctorModel.js";
import Booking from "../models/bookingModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Stripe from "stripe";

export const getCheckoutSession = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.doctorId);
  const user = await User.findById(req.userId);

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  // create stripe checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
    cancel_url: `${req.protocol}://${req.get("host")}/doctors/${doctor.id}`,
    customer_email: user.email,
    client_reference_id: req.params.doctorId,
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: doctor.ticketPrice * 100,
          product_data: {
            name: doctor.name,
            description: doctor.bio,
            images: [doctor.photo],
          },
        },
        quantity: 1,
      },
    ],
  });

  const booking = await Booking.create({
    doctor: doctor._id,
    user: user._id,
    ticketPrice: doctor.ticketPrice,
    session: session.id,
  });

  if (!booking) {
    res.status(500);
    throw new Error("No booking!");
  }

  res
    .status(200)
    .json({ success: true, message: "Successfully paid", session });
});
