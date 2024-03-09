import { motion } from "framer-motion";

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const AnimatedText = ({ words }: { words: string }) => {
  const wordsArr = words.split(" ");
  const wordsElementArr = wordsArr.map((word, index) => {
    return (
      <motion.span variants={childVariants} key={index + word}>
        {word}{" "}
      </motion.span>
    );
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.75 / wordsArr.length,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {wordsElementArr}
    </motion.span>
  );
};

export default AnimatedText;
