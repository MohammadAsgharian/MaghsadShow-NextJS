import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CardImage from "./CardImage";
import CardContainer from "./CardContainer";

const CardLg = (props) => {
  const { imgUrl } = props;

  return (
    <CardContainer>
      <Box
        sx={{
          width: "218px",
          position: "relative",
          minWidth: "218px",
          height: "434px",
          minHeight: "434px",
        }}
      >
        <CardImage imgUrl={imgUrl}></CardImage>
      </Box>
    </CardContainer>
  );
};

export default CardLg;
