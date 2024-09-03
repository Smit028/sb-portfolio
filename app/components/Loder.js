"use client";

import { useEffect, useState } from "react";
import AnimatedCircularProgressBar from "../../@/components/magicui/animated-circular-progress-bar";

export default function Loader() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const incrementValue = () => {
      setValue((prev) => {
        if (prev === 100) {
          return prev;
        }
        return prev + 1;
      });
    };

    const interval = setInterval(incrementValue, 50); // Faster increment to reach 100 quickly
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={loaderStyles}>
      <AnimatedCircularProgressBar
        max={100}
        min={0}
        value={value}
        gaugePrimaryColor="rgb(79 70 229)"
        gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
      />
    </div>
  );
}

const loaderStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(255, 255, 255, 0.8)',
  zIndex: 9999,
};
