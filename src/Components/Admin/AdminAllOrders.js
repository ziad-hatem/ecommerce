import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import AdminAllOrdersItem from "./AdminAllOrdersItem";
import useOrder from "../../hook/order/useOrder";

const AdminAllOrders = () => {
  const { fetchOrders, fetchOrder, orders } = useOrder();
  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div>
      {/* <div className='admin-content-text mb-2'>Tüm siparişleri yönet</div> */}
      <Row className="justify-content-start">
        {orders.map((order, index) => {
          return <AdminAllOrdersItem key={index} order={order} />;
        })}
      </Row>
    </div>
  );
};

export default AdminAllOrders;
