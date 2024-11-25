import { motion } from "framer-motion";

export default function SplashScreen({ isVisible }) {
  const colors = [
    "rgb(0, 255, 0)", // Green
    "rgb(0, 0, 255)", // Blue
    "rgb(238, 130, 238)", // Violet
    "rgb(255, 0, 0)", // Red
    "rgb(255, 165, 0)", // Orange
    "rgb(255, 255, 0)", // Yellow
  ];

  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        repeat: 2,
        repeatType: "reverse",
      },
    }),
  };

  const colorVariants = {
    animate: (i) => ({
      color: colors,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        delay: i * 0.1,
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{
        display: isVisible ? "flex" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "4rem",
          fontWeight: "bold",
        }}
      >
        {["M", "U", "S", "I", "C", "S"].map((letter, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            initial="initial"
            animate="animate"
            style={{ display: "inline-block", marginRight: "0.25rem" }}
          >
            <motion.span
              custom={i}
              variants={colorVariants}
              animate="animate"
              style={{ display: "inline-block" }}
            >
              {letter}
            </motion.span>
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
