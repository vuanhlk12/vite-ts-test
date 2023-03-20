import React, { FC } from "react";
import { Observable } from "rxjs";
import Logo from "../icons/favicon.svg?component";

export const foo = new Observable((subscriber) => {
  console.log("Hello");
  subscriber.next(42);
  subscriber.next(100);
  subscriber.next(200);
  setTimeout(() => {
    subscriber.next(300); // happens asynchronously
  }, 1000);
});

const Test: FC = (props) => {
  return (
    <div>
      <Logo />
      1234
    </div>
  );
};

export default Test;
