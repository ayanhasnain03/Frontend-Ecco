import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import { useDeleteCouponMutation, useGetAllCouponQuery } from "../../redux/api/couponApi";
import moment from "moment";
import { FaTrash } from 'react-icons/fa';
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import MetaData from "../../components/MetaData";

const CouponManagement = () => {
  const { data } = useGetAllCouponQuery();
  const [deleteCoupon] = useDeleteCouponMutation();
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id) => {
    try {
      const res = await deleteCoupon({ id }).unwrap();
      toast.success(res?.message);
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCoupon = () => {
    // Implement logic for creating a new coupon
    // For example, you can navigate to a different page for creating a coupon
    // Or you can show a modal/dialog for creating a coupon
    // Here, I'll just show a toast message
    toast.success("Create coupon functionality will be implemented soon.");
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <MetaData title="Coupon Management"/>
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Coupon Management ({data?.coupons.length})
        </h1>
        <div className="flex justify-end mb-4">
<Link to="/admin/couponmanagement/create">
<button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleCreateCoupon}
          >
            Create Coupon
          </button>
</Link>
        </div>
        {data?.coupons?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:mr-[4rem]">
            {data.coupons.map((c) => (
              <div key={c.code} className="border p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold">Code</h2>
                  <p className="text-lg">{c.code}</p>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold">Amount</h2>
                  <p className="text-lg">₹{c.amount}</p>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold">Used</h2>
                  <p className={`text-lg ${c.used ? 'text-red-500' : 'text-green-500'}`}>
                    {c.used ? 'Yes' : 'No'}
                  </p>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold">Expiry</h2>
                  <p className="text-lg">
                    {moment(c.expiryDate).format('MMMM Do YYYY, h:mm:ss a')}
                  </p>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold">Created At</h2>
                  <p className="text-lg">
                    {moment(c.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleDelete(c._id)}
                    disabled={loading}
                  >
                    <FaTrash />
                  </button>
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

export default CouponManagement;
