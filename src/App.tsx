import { useState } from "react";
import "./App.css";
import TestMultiLine from "./components/TestMultiLine";

function App() {
  const [count, setCount] = useState(0);

  return <TestMultiLine />;
}

export default App;
