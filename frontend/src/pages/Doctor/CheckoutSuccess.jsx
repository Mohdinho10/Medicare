import { Link } from "react-router-dom";

function CheckoutSuccess() {
  return (
    <div className="h-screen bg-gray-100 ">
      <div className="bg-white p-6 md:mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mx-auto my-6 h-16 w-16 text-green-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
        <div className="text-center">
          <h3 className="text-center text-base font-semibold text-gray-900 md:text-2xl">
            Payment Done!
          </h3>
          <p className="my-2 text-gray-600">
            Thank you for completing your secure online payment.
          </p>
          <p>Have a great day!</p>
          <div className="py-10 text-center">
            <Link
              to="/"
              className="bg-buttonBgColor px-12 py-3 font-semibold text-white"
            >
              Go back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSuccess;
