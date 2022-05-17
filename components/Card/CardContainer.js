import { Container } from "@mui/material";
import { motion } from "framer-motion";

const css = {
  position: "relative",
  display: "inline-block",
};

const CardContainer = (props) => {
  const onHoverSatrtEvent = (event) => {
    event.target.style.zIndex = "99";
  };
  const onHoverEndEvent = (event) => {
    event.target.style.zIndex = "1";
  };
  return (
    <Container
      sx={{
        cursor: "pointer",
      }}
    >
      <motion.div
        style={css}
        onHoverStart={onHoverSatrtEvent}
        onHoverEnd={onHoverEndEvent}
        whileHover={{ scale: 1.2 }}
      >
        {props.children}
      </motion.div>
    </Container>
  );
};

export default CardContainer;
