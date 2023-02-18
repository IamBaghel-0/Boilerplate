import { useState, useEffect, {/*type here*/} } from "react";
import ReactDOM from "react-dom/client";

function App() {
  // Create a state variable "inputValue" with an initial value of an empty string
  const [inputValue, setInputValue] = useState("");  
  // Create a reference "count" using the useRef hook and initialize it to zero
  const count = {/*type here*/}(0);  

  useEffect(() => {  
    // Create an effect that will run after every render of the component
    // Increment the count by 1 using the reference "count" created above
    count.current = count.current + 1;  
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        // Update the state "inputValue" with the current value of the input field
        onChange={(e) => setInputValue(e.target.value)}  
      />
      {/* Display the current value of the "count" reference in the heading */}
      <h1>Render Count: {count.current}</h1>  
    </>
  );
}

// Create a root element for the React application
const root = ReactDOM.createRoot(document.getElementById('root'));  
// Render the App component inside the root element created above
root.render(<App />);  
