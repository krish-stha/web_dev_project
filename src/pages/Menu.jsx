
import { useState } from "react"
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { motion, AnimatePresence } from "framer-motion"

function Menu() {
  const [categories] = useState(["Appetizers", "Main Course", "Beverages", "Desserts"])
  const [menuItems, setMenuItems] = useState([
    {
      name: "Chatamari",
      description: "Traditional Newari pizza made with rice flour",
      price: "Rs. 250",
      category: "Main Course",
    },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState(null)
  const [activeCategory, setActiveCategory] = useState("All")

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: categories[0],
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentItem) {
      // Edit existing item
      setMenuItems(menuItems.map((item) => (item.name === currentItem.name ? { ...formData } : item)))
    } else {
      // Add new item
      setMenuItems([...menuItems, formData])
    }
    closeModal()
  }

  const openModal = (item = null) => {
    if (item) {
      setCurrentItem(item)
      setFormData(item)
    } else {
      setCurrentItem(null)
      setFormData({
        name: "",
        description: "",
        price: "",
        category: categories[0],
      })
    }
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentItem(null)
  }

  const filteredItems =
    activeCategory === "All" ? menuItems : menuItems.filter((item) => item.category === activeCategory)

  return (
    <div className="menu">
      <div className="header">
        <h1 className="text-2xl font-bold text-primary mb-4">Menu Items</h1>
        <button className="add-item-btn bg-primary text-white" onClick={() => openModal()}>
          <PlusIcon className="icon w-5 h-5 mr-2" />
          Add Item
        </button>
      </div>

      <div className="categories">
        <button
          className={`category-btn ${activeCategory === "All" ? "active" : ""}`}
          onClick={() => setActiveCategory("All")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${category === activeCategory ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div className="menu-items" layout>
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="menu-item-card"
            >
              <div className="menu-item-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="price">{item.price}</div>
              </div>
              <button className="edit-btn" onClick={() => openModal(item)}>
                Edit
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2 className="text-xl font-semibold text-primary">
                  {currentItem ? "Edit Menu Item" : "Add New Menu Item"}
                </h2>
                <button onClick={closeModal} className="modal-close">
                  <XMarkIcon className="w-6 h-6 text-gray-500 hover:text-gray-700" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="modal-form">
                <div className="form-group">
                  <label htmlFor="name">Item Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter item name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter item description"
                    rows={3}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter price (e.g., Rs. 250)"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="modal-actions">
                  <button type="button" onClick={closeModal} className="btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    {currentItem ? "Update Item" : "Add Item"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Menu
