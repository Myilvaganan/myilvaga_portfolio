import { Button } from "react-bootstrap";
import { useState } from "react";
import { motion } from "framer-motion";

export const ButtonWrapper = ({
  text,
  onClickHandler,
}: {
  text: string;
  onClickHandler: any;
}) => {
  const [isShining, setIsShining] = useState(false);

  const handleClick = () => {
    setIsShining(true);
    setTimeout(() => setIsShining(false), 600); // Reset after animation
    onClickHandler();
  };

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <Button
        id="contact-button"
        className={`contact-button ${isShining ? "shine" : ""}`}
        onClick={handleClick}
      >
        <strong>{text}</strong>
      </Button>
    </motion.div>
  );
};
