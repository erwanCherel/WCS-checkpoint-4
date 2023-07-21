import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Login from "../components/Accueil/Login";
import Signin from "../components/Accueil/Signin";

export default function Accueil() {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <Box>
      {isRegistered ? (
        <Login setIsRegistered={setIsRegistered} />
      ) : (
        <Signin setIsRegistered={setIsRegistered} />
      )}
    </Box>
  );
}
