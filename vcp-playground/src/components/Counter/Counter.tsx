"use client"
import React, { useState } from "react";
import styles from "./styles.module.css";

interface CounterProps {
  initialCount?: number;
}

const Counter = ({ initialCount = 99 }: CounterProps) => {
  const [count, setCount] = useState(initialCount);

  const updateCount = (amount: number) => () => setCount(count + amount);

  return (
    <div className={styles.counter}>
      <button className={styles.btn} onClick={updateCount(-1)}>
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button className={styles.btn} onClick={updateCount(1)}>
        +
      </button>
    </div>
  );
};

export default Counter;
