import React, { ReactNode, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimateOnScrollType {
  direction: "left" | "right" | "bottom";
  children: ReactNode;
}

function AnimateOnScroll({ children, direction }: AnimateOnScrollType) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  if (direction == "left")
    return (
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0ms",
        }}
      >
        {children}
      </div>
    );
  if (direction == "bottom")
    return (
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0ms",
        }}
      >
        {children}
      </div>
    );
  if (direction == "right")
    return (
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0ms",
        }}
      >
        {children}
      </div>
    );
}

export default AnimateOnScroll;
