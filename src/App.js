import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ItemList from "./ItemList";
import ItemForm from "./ItemForm";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  // Add or Update Item
  const handleAddOrUpdateItem = (item) => {
    if (editingItem) {
      // Update existing item
      setItems((prevItems) =>
          prevItems.map((prevItem) =>
              prevItem.id === editingItem.id ? { ...prevItem, ...item } : prevItem
          )
      );
      setEditingItem(null);
    } else {
      // Add new item
      setItems((prevItems) => [...prevItems, { ...item, id: uuidv4() }]);
    }
  };

  // Delete Item
  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Edit Item
  const handleEditItem = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    setEditingItem(itemToEdit);
  };

  // Update Quantity
  const handleUpdateQuantity = (id, action, amount = 1) => {
    setItems((prevItems) =>
        prevItems.map((item) =>
            item.id === id
                ? {
                  ...item,
                  quantity:
                      action === "buy"
                          ? Math.max(item.quantity - amount, 0)
                          : item.quantity + amount,
                }
                : item
        )
    );
  };

  return (
      <div className="App">
        <h1>Band Merch Store</h1>
        <ItemForm onSubmit={handleAddOrUpdateItem} editingItem={editingItem} />
        <ItemList
            items={items}
            onDelete={handleDeleteItem}
            onEdit={handleEditItem}
            onUpdateQuantity={handleUpdateQuantity}
        />
      </div>
  );
}

export default App;