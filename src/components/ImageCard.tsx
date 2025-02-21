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
      style={cardStyle}
      className={`rounded-3 d-flex w-100 flex-column justify-content-center align-items-center ls-1 card-animate ${isVisible ? "animate" : ""}`}
    >
      <h6 className="fw-semibold " style={{color: "#034f2a"}}>{props.title.toUpperCase()}</h6>
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

const cardStyle = {
  width: "350px",
  height: "200px",
  fontFamily: "Roboto",
  backgroundColor: "#e5e5f7",
  opacity: "0.8",

  backgroundImage: "repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f7 10px ), repeating-linear-gradient( #a8a8a855, #a8a8a8 )"
};

