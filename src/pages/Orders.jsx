import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';

function Orders() {
  const orders = [
    {
      id: "#1",
      customer: "Table 4",
      items: "Chatamari, Yomari, Thon",
      status: "Preparing",
      total: "Rs. 850",
    },
    {
      id: "#2",
      customer: "Table 7",
      items: "Choyla, Aalu Tama, Lassi",
      status: "Ready",
      total: "Rs. 750",
    },
  ]

  return (
    <div className="orders">
      <div className="header">
        <h1>Khanpan Restaurant</h1>
      </div>

      <div className="orders-table">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Status</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.items}</td>
                <td>
                  <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
                </td>
                <td>{order.total}</td>
                <td>
                <button className="icon-button">
                        <EllipsisVerticalIcon className="icon" />
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders

