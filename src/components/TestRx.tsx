import { FC, useEffect, useRef } from "react";
import {
  debounce,
  first,
  fromEvent,
  interval,
  map,
  multicast,
  Observable,
  of,
  refCount,
  scan,
  Subject,
  Subscription,
} from "rxjs";

const source = interval(1000);

const subject = new Subject();
const refCounted = source.pipe(multicast(subject), refCount());
subject.pipe();

const TestRx: FC = () => {
  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const clicks = fromEvent(ref.current, "click");
      const result = clicks.pipe(
        scan((i) => ++i, 1),
        debounce((i) => interval(200 * i))
      );
      result.subscribe((x) => console.log(x));
    }
  }, []);

  return (
    <div>
      <button ref={ref}>temptemp</button>
    </div>
  );
};

export default TestRx;
