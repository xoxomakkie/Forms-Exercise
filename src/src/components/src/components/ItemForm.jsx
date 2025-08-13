import React, { useState } from "react";

function ItemForm({ addItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [purpose, setPurpose] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!name) newErrors.name = true;
    if (!quantity) newErrors.quantity = true;
    if (!purpose) newErrors.purpose = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    addItem({ name, quantity, purpose });

    setName("");
    setQuantity("");
    setPurpose("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="item-form">
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? "error" : ""}
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className={errors.quantity ? "error" : ""}
        />
      </div>
      <div>
        <label>Purpose:</label>
        <input
          type="text"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          className={errors.purpose ? "error" : ""}
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
