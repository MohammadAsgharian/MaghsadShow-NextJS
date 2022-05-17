import React from "react";
import Image from "next/image";
const css = {
  top: "0px",
  botton: "0px",
  right: "0px",
  left: "0px",

  borderRadius: "0.375rem",
  objectPosition: "center",
  display: "block",
  maxWidth: "100%;",
};

const CardImage = (props) => {
  const { imgUrl } = props;
  return (
    <React.Fragment>
      <Image
        src={imgUrl}
        alt="image"
        layout="fill"
        style={css}
        objectFit="cover"
      ></Image>
    </React.Fragment>
  );
};

export default CardImage;
