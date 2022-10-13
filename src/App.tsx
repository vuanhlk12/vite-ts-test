import { useState } from "react";
import "./App.css";
import ChartTest from "./components/ChartTest";

function App() {
  const [count, setCount] = useState(0);

  return <ChartTest />;
}

export default App;
