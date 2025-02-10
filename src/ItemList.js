import React from "react";
import Item from "./Item";

function ItemList({ items, onDelete, onEdit, onUpdateQuantity }) {
    return (
        <div className="item-list">
            {items.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    onUpdateQuantity={onUpdateQuantity}
                />
            ))}
        </div>
    );
}

export default ItemList;