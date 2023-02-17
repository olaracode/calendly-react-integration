import React from "react";
import { Button } from "@chakra-ui/react";
import { PopupButton } from "react-calendly";
const Cta = ({ url }) => {
  return (
    <Button my={5} variant="primary">
      <PopupButton
        url={url}
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Ejemplo CTA"
      />
    </Button>
  );
};

export default Cta;
