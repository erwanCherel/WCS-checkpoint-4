import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
import { useUserContext } from "../../contexts/UserContext";

export default function Signin({ setIsRegistered }) {
  const [showPassword, setShowPassword] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUserContext();
  const toast = useToast();

  const handleRegister = () => {
    setIsRegistered(true);
  };

  const handleChangeFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleChangeLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstname || !lastname || !password || !email) {
      console.info("Vous devez remplir tous les champs !");
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          toast({
            title: "Compte créé.",
            description: "Vous pouvez vous connecter",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "bottom-right",
          });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((err) => {
          console.info(err);
          console.info("L'inscription a échoué");
          toast({
            title: "Erreur.",
            description: "Erreur.",
            status: "error",
            duration: 3000,
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
          rounded="lg"
          mx="auto"
          boxShadow="lg"
          maxW="lg"
          py={12}
          px={6}
          bg="element.white"
        >
          <Stack align="center">
            <Heading fontSize="4xl" textAlign="center">
              S'inscrire
            </Heading>
          </Stack>
          <Box p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Prénom</FormLabel>
                    <Input
                      required
                      type="text"
                      name="firstname"
                      placeholder="Prénom"
                      value={firstname}
                      onChange={handleChangeFirstname}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Nom</FormLabel>
                    <Input
                      required
                      type="text"
                      name="lastname"
                      placeholder="Nom"
                      value={lastname}
                      onChange={handleChangeLastname}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Adresse Mail</FormLabel>
                <Input
                  type="email"
                  required
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChangeEmail}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Mot de passe</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    required
                    name="passwordOne"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={handleChangePassword}
                  />
                  <InputRightElement h="full">
                    <Button
                      variant="ghost"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
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
                  S'inscrire
                </Button>
              </Stack>
              <Stack pt={6}>
                <Flex justify="center" gap="0.25rem">
                  Déjà inscrit ?
                  <Text
                    color="element.gray"
                    onClick={handleRegister}
                    _hover={{ cursor: "pointer" }}
                  >
                    Se connecter
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

Signin.propTypes = {
  setIsRegistered: PropTypes.func.isRequired,
};
