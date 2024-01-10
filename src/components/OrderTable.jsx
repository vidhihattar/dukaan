import React from 'react';
const OrderTable = ({ orders }) => {
  return (
    <table className='order-table'>
      <thead>
        <tr className='thead'>
          <th>Order ID</th>
          <th>Status</th>
          <th>Transaction ID</th>
          <th>Refund Date</th>
          <th>Order Amount</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr className='titems' key={order.orderId}>
            <td>#{order.orderId}</td>
            <td><div className='circle'></div>
              {order.status}</td>
            <td>{order.transactionId}</td>
            <td>{order.refundDate}</td>
            <td>&#8377; {order.orderAmount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
