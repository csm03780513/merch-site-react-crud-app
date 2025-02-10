import React, { useState, useEffect } from "react";

function ItemForm({ onSubmit, editingItem }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        if (editingItem) {
            setName(editingItem.name);
            setDescription(editingItem.description);
            setQuantity(editingItem.quantity);
        }
    }, [editingItem]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, description, quantity });
        setName("");
        setDescription("");
        setQuantity(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Item Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                required
            />
            <button type="submit">{editingItem ? "Update Item" : "Add Item"}</button>
        </form>
    );
}

export default ItemForm;