import React from "react";

const Menu = () => {
  return (
    <div className="menu">
      <h2>Menu Management</h2>
      <p>Manage your menu items here.</p>
      <table className="menu-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pizza</td>
            <td>Fast Food</td>
            <td>₹500</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Burger</td>
            <td>Fast Food</td>
            <td>₹200</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Menu;
