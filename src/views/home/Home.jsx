import React, { useState } from "react";
import Container from "@/components/atoms/Container";
import { Input, Box, Button, Divider } from "@chakra-ui/react";
import Inline from "@/components/Inline";
import Popup from "@/components/Popup";
import Cta from "@/components/Cta";
const defaultValue = "https://calendly.com/octavioasapchi";
function Home() {
  const [userCalendlyUrl, setUserCalendlyUrl] = useState(defaultValue);
  const [userInput, setUserInput] = useState("");
  const handleClick = () => {
    if (userInput.trim() === "") return;
    setUserCalendlyUrl(userInput);
    setUserInput("");
  };
  return (
    <>
      <Container>
        <Box mb={2} display="flex" gap="5">
          <Input
            placeholder="https://calendly.com/username"
            w={"50%"}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <Button variant={"primary"} onClick={handleClick}>
            Cambiar usuario
          </Button>
        </Box>

        <Inline url={userCalendlyUrl} />
        <Divider />
        <Popup url={userCalendlyUrl} />
        <Cta url={userCalendlyUrl} />
      </Container>
    </>
  );
}

export default Home;
