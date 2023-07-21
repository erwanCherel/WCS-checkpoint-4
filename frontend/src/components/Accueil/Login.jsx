import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

export default function Login({ setIsRegistered }) {
  const { setUser } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleRegister = () => {
    setIsRegistered(false);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      console.info("Vous devez remplir tous les champs !");
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          const user = data;
          setUser(user);
          toast({
            title: "Authentification réussie.",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "bottom-right",
          });
          navigate("/chat-room");
        })
        .catch((err) => {
          console.error("error: ", err);
          toast({
            title: "Erreur.",
            description: "Vérifiez vos identifiants",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "bottom-right",
          });
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex minH="100vh" align="center" justify="center" bg="element.pink">
        <Stack
          spacing={8}
          mx="auto"
          w="lg"
          py={12}
          px={6}
          boxShadow="lg"
          rounded="lg"
          bg="element.white"
        >
          <Stack align="center">
            <Heading fontSize="4xl">Se connecter</Heading>
          </Stack>
          <Box p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Adresse mail</FormLabel>
                <Input
                  type="email"
                  required
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChangeEmail}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Mot de passe</FormLabel>
                <Input
                  type="password"
                  required
                  name="passwordOne"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={handleChangePassword}
                />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg="element.pink"
                  color="element.blue"
                  _hover={{
                    opacity: "0.9",
                  }}
                >
                  Se connecter
                </Button>
              </Stack>
              <Stack pt={6}>
                <Flex justify="center" gap="0.25rem">
                  Vous n'avez pas de compte ?
                  <Text
                    color="element.gray"
                    onClick={handleRegister}
                    _hover={{ cursor: "pointer" }}
                  >
                    S'inscrire
                  </Text>
                </Flex>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  );
}

Login.propTypes = {
  setIsRegistered: PropTypes.func.isRequired,
};
