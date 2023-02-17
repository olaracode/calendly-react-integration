import React from "react";
import { PopupWidget } from "react-calendly";
import { Box } from "@chakra-ui/react";
const Popup = ({ url }) => {
  return (
    <Box>
      <PopupWidget
        url={url}
        rootElement={document.getElementById("root")}
        text="Ejemplo del popup + FAB"
        textColor="#ffffff"
        color="#00a2ff"
      />
    </Box>
  );
};

export default Popup;
