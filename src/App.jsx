import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <main className="container">
      <Counter start={10}  change={12}/>
      <Counter />
      <Counter start={20} change={10} danger/>
    </main>
  );
}

export default App;
