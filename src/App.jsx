import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto  px-6">
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello Instagram
      </h1>
    </div>
  );
}

export default App;
  