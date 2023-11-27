import { useEffect, useState } from "react";
const OrderShow = ({ order }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const findTimeLeft = () => {
      const millesecondsLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(millesecondsLeft / 1000));
    };
    // invoke findTimeLeft so it starts right away
    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  console.log({ order });
  return (
    <div>
      OrderShow
      <div> {timeLeft} seconds until order expires.</div>
    </div>
  );
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);
  return { order: data };
};
export default OrderShow;
