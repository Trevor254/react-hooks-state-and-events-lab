// import React from "react";

// function Item({ name, category }) {
//   return (
//     <li className="">
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className="add">Add to Cart</button>
//     </li>
//   );
// }

// export default Item;
import React, { useState } from "react";

function Item({ name, category }) {
  // Step 1: Create state for cart status
  const [isInCart, setIsInCart] = useState(false);

  // Step 2: Event handler to toggle cart status
  const handleCartToggle = () => {
    setIsInCart((prevStatus) => !prevStatus);
  };

  // Step 3: Dynamic className based on cart status
  const itemClass = isInCart ? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Step 4: Button toggles state and updates text */}
      <button className="add" onClick={handleCartToggle}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
