import React from "react";

function ItemAction({ onDelete }) {
  return (
    <button className="delete-button" onClick={onDelete}>
      Delete
    </button>
  );
}

export default ItemAction;
