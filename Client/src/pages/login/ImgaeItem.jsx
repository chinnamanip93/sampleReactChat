import { Box } from "@mui/material";
import React from "react";

const ImgaeItem = (props) => {
  return (
    <Box>
      <div>
        <img
          src={props.item.path}
          alt=""
          style={{
            width: "100%",
            height: "800px;",
          }}
          key={props.id}
        />
      </div>
    </Box>
  );
};

export default ImgaeItem;
