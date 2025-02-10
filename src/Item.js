import React from "react";

function Item({ item, onDelete, onEdit, onUpdateQuantity }) {
    const { id, name, description, quantity } = item;

    return (
        <div className="item">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Quantity: {quantity === 0 ? "Out of Stock" : quantity}</p>
            <div className="item-actions">
                <button onClick={() => onUpdateQuantity(id, "buy")} disabled={quantity === 0}>
                    Buy
                </button>
                <button onClick={() => onUpdateQuantity(id, "restock", 5)}>Restock</button>
                <button onClick={() => onEdit(id)}>Edit</button>
                <button onClick={() => onDelete(id)}>Delete</button>
            </div>
        </div>
    );
}

export default Item;