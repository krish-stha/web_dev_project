"use client"

import { useState } from "react"
import { EllipsisVerticalIcon, PlusIcon } from "@heroicons/react/24/solid"
import AddOrderModal from "./AddOrderModal"

function Orders() {
  const [orders, setOrders] = useState([
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
  ])

  const [isAddOrderModalOpen, setIsAddOrderModalOpen] = useState(false)

  const handleAddOrder = (newOrder) => {
    setOrders([...orders, newOrder])
    setIsAddOrderModalOpen(false)
  }

  return (
    <div className="main-content">
      <div className="header">
        <h1>Khanpan Restaurant</h1>
        <button className="add-order-btn" onClick={() => setIsAddOrderModalOpen(true)}>
          <PlusIcon className="icon" />
          Add Order
        </button>
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

      {isAddOrderModalOpen && (
        <AddOrderModal onClose={() => setIsAddOrderModalOpen(false)} onAddOrder={handleAddOrder} />
      )}
    </div>
  )
}

export default Orders

