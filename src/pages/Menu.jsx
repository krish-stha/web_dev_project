import { PlusIcon } from '@heroicons/react/24/solid';

function Menu() {
  const categories = ["Appetizers", "Main Course", "Beverages", "Desserts"]
  const menuItems = [
    {
      name: "Chatamari",
      description: "Traditional Newari pizza made with rice flour",
      price: "Rs. 250",
      category: "Main Course",
    },
  ]

  return (
    <div className="menu">
      <div className="header">
        <h1>Menu Items</h1>
        <button className="add-item-btn">
          <PlusIcon className="icon" />
          Add Item
        </button>
      </div>

      <div className="categories">
        {categories.map((category) => (
          <button key={category} className={`category-btn ${category === "Main Course" ? "active" : ""}`}>
            {category}
          </button>
        ))}
      </div>

      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.name} className="menu-item-card">
            <div className="menu-item-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="price">{item.price}</div>
            </div>
            <button className="edit-btn">Edit</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu

