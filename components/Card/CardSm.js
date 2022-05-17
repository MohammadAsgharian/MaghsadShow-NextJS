import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CardImage from "./CardImage";
import CardContainer from "./CardContainer";

const CardSm = (props) => {
  const { imgUrl } = props;

  return (
    <CardContainer>
      <Box
        sx={{
          width: "300px",
          position: "relative",
          minWidth: "300px",
          height: "170px",
          minHeight: "170px",
        }}
      >
        <CardImage imgUrl={imgUrl}></CardImage>
      </Box>
    </CardContainer>
  );
};

export default CardSm;
