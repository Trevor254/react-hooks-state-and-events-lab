// import React, {useState} from  "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {

//   // replace 'false' with a state variable that can be toggled between true and false
//   // this will be used for the Dark Mode Toggle feature
//    const [isDarkMode, setIsDarkMode] = useState(false)
//   const appClass = isDarkMode ? "App dark" : "App light"

//   const handleDarkModeToggle = () => {
//     setIsDarkMode((prevMode) => !prevMode)
//   }

//   return (
//     <div className={appClass}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={{handleDarkModeToggle}}>{isDarkMode ? "Light Mode":"Dark Mode"}</button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Step 1: Create state for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 2: Event handler for toggling dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Step 3: Dynamically set className based on dark mode state
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Step 4: Add button to toggle dark mode */}
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      {/* Pass item data to ShoppingList component */}
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

