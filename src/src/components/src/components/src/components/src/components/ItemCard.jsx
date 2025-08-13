import React from "react";
import ItemAction from "./ItemAction.jsx";

function ItemCard({ item, onDelete }) {
  return (
    <div className="item-card">
      <p><strong>Name:</strong> {item.name}</p>
      <p><strong>Quantity:</strong> {item.quantity}</p>
      <p><strong>Purpose:</strong> {item.purpose}</p>
      <ItemAction onDelete={onDelete} />
    </div>
  );
}

export default ItemCard;
