import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

const AnimatedPage = ({ children }) => {
  return (
    // different page transition animations

    // <motion.div
    //   variants={animations}
    //   initial="initial"
    //   animate="animate"
    //   exit="exit"
    //   transition={{ duration: 1 }}
    // >

    <motion.div
      initial={{ opacity: 0.5, y: -10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: [0.61, 0.1, 0.88, 1],
        },
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
