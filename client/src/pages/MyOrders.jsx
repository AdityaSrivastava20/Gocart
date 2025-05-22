import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currency, axios, user } = useAppContext();

  const fetchMyOrders = async () => {
    try {
      const { data } = await axios.get("/api/order/user");
      if (data.success) {
        setMyOrders(data.orders);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchMyOrders();
    }
  }, [user]);

  return (
    <div className="mt-16 pb-16">
      <div className="flex flex-col items-end w-max mb-8">
        <p className="text-2xl font-medium uppercase">
          My <span className="text-primary">Orders</span>
        </p>
        <div className="w-20 h-0.5 bg-primary rounded-full mt-1"></div>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading orders...</p>
      ) : myOrders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        myOrders.map((order, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
          >
            <p className="flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col">
              <span>Order Id: {order._id}</span>
              <span>
                Payment: {order.paymentType === "Online" ? "Online" : "Cash on Delivery"}{" "}
                {order.paymentType === "Online" && (
                  <span
                    className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                      order.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
                    }`}
                  >
                    {order.isPaid ? "Paid" : "Unpaid"}
                  </span>
                )}
              </span>
              <span>
                Total Amount: {currency}
                {order.amount}
              </span>
            </p>
            {order.items.map((item, i) => {
              const product = item.product;
              if (!product) return null;

              return (
                <div
                  key={i}
                  className={`relative bg-white text-gray-500/70 ${
                    order.items.length !== i + 1 && "border-b"
                  } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-16 w-full max-w-4xl transition-all`}
                >
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      {product?.image?.[0] ? (
                        <img
                          src={product.image[0]}
                          alt={product.name || "Product"}
                          className="w-16 h-16"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 flex items-center justify-center text-xs text-gray-500 rounded">
                          No Image
                        </div>
                      )}
                    </div>
                    <div className="ml-4">
                      <h2 className="text-xl font-medium text-gray-800">
                        {product.name}
                      </h2>
                      <p>Category: {product.category}</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center md:ml-8 mb-4 md:mb-0 font-semibold text-sm">
                    <p>Quantity: {item.quantity || "1"}</p>
                    <p>Status: {order.status}</p>
                    <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>
                  <p className="text-primary text-lg font-medium">
                    Amount: {currency}
                    {product.offerPrice * item.quantity}
                  </p>
                </div>
              );
            })}
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
