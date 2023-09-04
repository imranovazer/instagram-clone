import { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto  px-6">
      <h1 className="text-3xl font-bold flex gap-3 items-center  text-red-500">
        <span>Hello Instagram</span>
        <AiOutlineInstagram />
      </h1>
    </div>
  );
}

export default App;
