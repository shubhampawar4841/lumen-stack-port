import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[99999]"
        style={{ backgroundColor: "hsl(168, 100%, 50%)" }}
        animate={{ x: pos.x - 4, y: pos.y - 4, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", mass: 0.1, stiffness: 800, damping: 20 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[99998]"
        style={{ borderColor: "hsl(168, 100%, 50%, 0.5)" }}
        animate={{ x: pos.x - 16, y: pos.y - 16, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", mass: 0.5, stiffness: 200, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
