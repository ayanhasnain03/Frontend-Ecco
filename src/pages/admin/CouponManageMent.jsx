import Sidebar from "../../components/admin/Sidebar";
import { useGetAllCouponQuery } from "../../redux/api/couponApi";
import moment from "moment"
const CouponManageMent = () => {
  const { data } = useGetAllCouponQuery();

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6  min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">Coupon Management({data?.coupons.length})</h1>
        {data?.coupons?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.coupons.map((c) => (
              <div key={c.code} className="border p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold">Code</h2>
                  <p className="text-lg">{c.code}</p>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold">Amount</h2>
                  <p className="text-lg">{c.amount}</p>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold">Used</h2>
                  <p className={`text-lg ${c.used ? 'text-red-500' : 'text-green-500'}`}>
                    {c.used ? 'Yes' : 'No'}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Expiry</h2>
                  <p className="text-lg">{moment(c.expiryDate).format('MMMM Do YYYY, h:mm:ss a')}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">createdAt</h2>
                  <p className="text-lg">{moment(c.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-500">No coupons available.</p>
        )}
      </div>
    </div>
  );
};

export default CouponManageMent;
