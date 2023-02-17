import React from "react";
import { InlineWidget } from "react-calendly";
import { Box, SimpleGrid, GridItem } from "@chakra-ui/react";
const Inline = ({ url }) => {
  return (
    <>
      <Box>
        <InlineWidget
          url={url}
          iframeTitle="Reunion de referente"
          styles={{
            width: "500px",
            height: "500px",
            borderRadius: "10px",
            padding: "0px",
            margin: "0px",
          }}
          pageSettings={{ backgroundColor: "3374FF" }}
        />
      </Box>
      <Box overflow={"hidden"}>
        <InlineWidget url={url} />
      </Box>
      <SimpleGrid columns={3}>
        <GridItem colSpan={2}>Hola</GridItem>
        <GridItem borderRadius="10px">
          <InlineWidget url={url} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default Inline;
