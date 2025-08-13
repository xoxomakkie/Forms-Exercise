import React from "react";
import ItemCard from "./ItemCard.jsx";

function InventoryDisplay({ inventory, deleteItem }) {
  return (
    <div className="inventory-display">
      <h2>Inventory</h2>
      {inventory.length === 0 ? (
        <p>No items in inventory yet.</p>
      ) : (
        inventory.map((item, index) => (
          <ItemCard
            key={index}
            item={item}
            onDelete={() => deleteItem(index)}
          />
        ))
      )}
    </div>
  );
}

export default InventoryDisplay;
