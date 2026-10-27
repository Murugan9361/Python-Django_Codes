import { useEffect, useState } from "react";

function UseeffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // 1️⃣ Runs only once
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // 2️⃣ Runs every time the component renders
  useEffect(() => {
    console.log("Component rendered");
  });

  // 3️⃣ Runs when count changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h1>useEffect Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello {name}</h2>
    </div>
  );
}

export default UseeffectHook;