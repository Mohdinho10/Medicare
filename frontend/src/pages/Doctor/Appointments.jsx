import { formatDate } from "../../utils/formatDate";

/* eslint-disable react/prop-types */
function Appointments({ appointments }) {
  return (
    <table className="w-full text-left text-sm text-gray-500">
      <thead className="bg-gray-50 text-xs uppercase text-gray-700">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th className="px-6 py-3">Gender</th>
          <th className="px-6 py-3">Payment</th>
          <th className="px-6 py-3">Price</th>
          <th className="px-6 py-3">Booked on</th>
        </tr>
      </thead>

      <tbody>
        {appointments?.map((item) => (
          <tr key={item._id}>
            <th
              className="flex items-center whitespace-nowrap px-6 py-4 text-gray-900"
              scope="row"
            >
              <img
                src={item?.user?.photo}
                alt="user"
                className="h-10 w-10 rounded-full"
              />
              <div className="pl-3">
                <div className="text-base font-semibold">
                  {item?.user?.name}
                </div>
                <div className="text-normal text-gray-500">
                  {item?.user?.email}
                </div>
              </div>
            </th>

            <td className="px-6 py-4">{item?.user?.gender} </td>
            <td className="px-6 py-4">
              {item?.isPaid && (
                <div className="flex items-center">
                  <div className="mr-2 h-2.5 w-2.5 rounded-full bg-green-500"></div>
                  Paid
                </div>
              )}
              {!item?.isPaid && (
                <div className="flex items-center">
                  <div className="mr-2 h-2.5 w-2.5 rounded-full bg-red-500"></div>
                  Unpaid
                </div>
              )}
            </td>
            <td className="px-6 py-4">{item?.ticketPrice}</td>
            <td className="px-6 py-4">{formatDate(item?.createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Appointments;
