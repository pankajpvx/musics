// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function SplashV0({ isVisible }) {
//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         backgroundColor: "black",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <motion.div
//         initial={{ opacity: 1, scale: 1 }}
//         animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
//         transition={{ duration: 0.5 }}
//         style={{
//           position: "relative",
//           width: "16rem",
//           height: "16rem",
//         }}
//       >
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             rotate: [0, 360],
//           }}
//           transition={{
//             duration: 3,
//             ease: "easeInOut",
//             times: [0, 0.5, 1],
//             repeat: Infinity,
//           }}
//           style={{
//             position: "absolute",
//             inset: 0,
//             borderRadius: "50%",
//             borderWidth: "4px",
//             borderStyle: "solid",
//             // borderColor: "transparent transparent purple transparent",
//             borderColor: "purple",
//           }}
//         />
//         <motion.div
//           animate={{
//             scale: [1, 1.5, 1],
//             rotate: [0, -360],
//           }}
//           transition={{
//             duration: 3,
//             ease: "easeInOut",
//             times: [0, 0.5, 1],
//             repeat: Infinity,
//             delay: 0.2,
//           }}
//           style={{
//             position: "absolute",
//             inset: "0.5rem",
//             borderRadius: "50%",
//             borderWidth: "4px",
//             borderStyle: "solid",
//             // borderColor: "cyan transparent transparent cyan",
//             // borderColor: "cyan",
//           }}
//         />
//         <motion.div
//           animate={{
//             scale: [1, 1.8, 1],
//             rotate: [0, 360],
//           }}
//           transition={{
//             duration: 3,
//             ease: "easeInOut",
//             times: [0, 0.5, 1],
//             repeat: Infinity,
//             delay: 0.4,
//           }}
//           style={{
//             position: "absolute",
//             inset: "1rem",
//             borderRadius: "50%",
//             borderWidth: "4px",
//             borderStyle: "solid",
//             // borderColor: "green transparent transparent green",
//             // borderColor: "green",
//           }}
//         />
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           style={{
//             position: "absolute",
//             inset: 0,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <h1
//             style={{
//               fontSize: "2.5rem",
//               fontWeight: "bold",
//               color: "white",
//             }}
//           >
//             Musics
//           </h1>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SplashV0({ isVisible }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "relative",
          width: "16rem",
          height: "16rem",
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            inset: 0,
            borderTop: "4px solid #7c3aed",
            borderBottom: "4px solid #7c3aed",
            borderRadius: "50%",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -360],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            delay: 0.2,
          }}
          style={{
            position: "absolute",
            inset: "0.5rem",
            borderRight: "4px solid #06b6d4",
            borderLeft: "4px solid #06b6d4",
            borderRadius: "50%",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.8, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            delay: 0.4,
          }}
          style={{
            position: "absolute",
            inset: "1rem",
            borderTop: "4px solid #22c55e",
            borderBottom: "4px solid #22c55e",
            borderRadius: "50%",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Musics
          </h1>
        </motion.div>
      </motion.div>
    </div>
  );
}
