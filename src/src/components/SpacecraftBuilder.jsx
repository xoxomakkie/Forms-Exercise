import React, { useState } from "react";
import ItemForm from "./ItemForm.jsx";
import InventoryDisplay from "./InventoryDisplay.jsx";

function SpacecraftBuilder() {
  const [inventory, setInventory] = useState([]);

  const addItem = (item) => {
    setInventory([...inventory, item]);
  };

  const deleteItem = (index) => {
    const newInventory = inventory.filter((_, i) => i !== index);
    setInventory(newInventory);
  };

  return (
    <div className="spacecraft-builder">
      <ItemForm addItem={addItem} />
      <InventoryDisplay inventory={inventory} deleteItem={deleteItem} />
    </div>
  );
}

export default SpacecraftBuilder;
