"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const AnimatedList = React.memo(({
  className,
  children,
  delay = 1000
}) => {
  const [index, setIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (index < childrenArray.length - 1 && isVisible) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearInterval(interval);
    }
  }, [index, childrenArray.length, delay, isVisible]);

  const itemsToShow = useMemo(() => childrenArray.slice(0, index + 1).reverse(), [index, childrenArray]);

  return (
    <div ref={sectionRef} className={`flex flex-col items-center gap-4 ${className}`}>
      <AnimatePresence>
        {itemsToShow.map((item) => (
          <AnimatedListItem key={(item).key}>
            {item}
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
});

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({
  children
}) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}
