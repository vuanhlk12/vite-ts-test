import { useState } from "react";
import "./TestMultiLine.scss";

const TestMultiLine = () => {
  const [count, setCount] = useState([0]);
  console.log(count);
  return (
    <div className="container">
      <button onClick={() => setCount([...count, count.length + 1])}>
        {count}
      </button>
      <div>123123213 123123213 123123213 123123213</div>
      <div>
        <div>123123213 123123213 123123213 123123213</div>
        <div>123123213 123123213 123123213 123123213</div>
        <div>123123213 123123213 123123213 123123213</div>
        <div>123123213 123123213 123123213 123123213</div>
      </div>
      <div>
        <p>123123213 123123213 123123213 123123213</p>
        <p>123123213 123123213 123123213 123123213</p>
        <p>123123213 123123213 123123213 123123213</p>
        <p>123123213 123123213 123123213 123123213</p>
      </div>
    </div>
  );
};

export default TestMultiLine;
