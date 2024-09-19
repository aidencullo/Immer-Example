import { useImmer } from "use-immer";

let initialCounters = [0, 2, 0];

export default function CounterList() {
  const [counters, setCounters] = useImmer(initialCounters);

  function handleIncrementClick(index) {
    setCounters((c) => {
      c[index] += 1;
    });
  };

  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button
            onClick={() => {
              handleIncrementClick(i);
            }}
          >
            Increment
          </button>
        </li>
      ))}
    </ul>
  );
}
