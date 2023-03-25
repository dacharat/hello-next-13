"use client";

import { useRouter } from "next/router";
import { createContext, useState } from "react";

const ThemeContext = createContext({});

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
