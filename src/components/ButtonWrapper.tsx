import { Button } from "react-bootstrap";
import { useState } from "react";

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
    <Button
      id="contact-button"
      className={`contact-button ${isShining ? "shine" : ""}`}
      onClick={handleClick}
    >
      <strong>{text}</strong>
    </Button>
  );
};
