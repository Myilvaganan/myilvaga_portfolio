import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export const ImageCard = (props: { title: string; link: string }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const handleIntersection = (entries, observer) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        background: "#313331",
        width: "350px",
        height: "200px",
        fontFamily: "Roboto",
      }}
      className={`rounded-3 d-flex flex-column justify-content-center align-items-center ls-1 card-animate ${isVisible ? "animate" : ""}`}
    >
      <h6 className="highlight fw-semibold ">{props.title.toUpperCase()}</h6>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileFocus={{ scale: 0 }}
        whileTap={{ scale: 0.56 }}
        className="rounded-3"
      >
        <img
          className="rounded-3 p-2"
          loading="lazy"
          src={props.link}
          alt={props.link}
          width={250}
          height={150}
        />
      </motion.div>
    </div>
  );
};
