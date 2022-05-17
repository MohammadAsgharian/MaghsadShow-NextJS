import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CardImage from "./CardImage";
import CardContainer from "./CardContainer";

const CardMd = (props) => {
  const { imgUrl } = props;

  return (
    <CardContainer>
      <Box
        sx={{
          width: "158px",
          position: "relative",
          minWidth: "158px",
          height: "280px",
          minHeight: "280px",
        }}
      >
        <CardImage imgUrl={imgUrl}></CardImage>
      </Box>
    </CardContainer>
  );
};

export default CardMd;
