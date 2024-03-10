import { motion } from "framer-motion";

const AnimatedText = ({ words }: { words: string }) => {
  const lettersArr = words.split("");
  const lettersElementArr = lettersArr.map((word, index) => {
    return (
      <motion.span
        key={index + word}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1.3,
            delay: index / lettersArr.length,
            type: "bounce",
          },
        }}
      >
        {word}
      </motion.span>
    );
  });

  return <span>{lettersElementArr}</span>;
};

export default AnimatedText;
