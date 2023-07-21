import {
  Button,
  Flex,
  FormLabel,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import PropTypes from "prop-types";

export default function CreateConversation({ setSelectedUser }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchUser, setSearchUser] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChangeUser = (e) => {
    setSearchUser(e.target.value);
  };

  const handleSubmitSearchUser = () => {
    const searchParams = new URLSearchParams();
    const firstName = searchUser;
    if (firstName) searchParams.append("firstname", firstName);

    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/api/users/?${searchParams.toString()}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setSearchResults(data);
      })
      .catch((err) => console.error(err));
  };

  const getUserFound = (userFound) => {
    setSelectedUser({ ...userFound });
  };

  return (
    <Flex
      onClick={onOpen}
      bg="element.blue"
      color="element.white"
      p=".5rem 1rem"
      boxShadow="md"
      zIndex="100"
      alignItems="center"
      justify="space-between"
      _hover={{ opacity: ".9", cursor: "pointer" }}
    >
      <Flex fontWeight="bold" fontSize="1.1rem">
        Créer une conversation
      </Flex>
      <Icon id="iconAdd" as={AiOutlinePlus} boxSize={10} />

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Créer une conversation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel>
              <Flex gap="1rem">
                <Input
                  placeholder="John Doe"
                  value={searchUser}
                  onChange={handleChangeUser}
                />
                <Button
                  type="button"
                  bg="element.pink"
                  onClick={handleSubmitSearchUser}
                >
                  Rechercher
                </Button>
              </Flex>
            </FormLabel>
            <Flex flexDirection="column">
              <List>
                {searchResults.map((userFound) => (
                  <ListItem
                    key={userFound.id}
                    p=".5rem"
                    borderRadius=".25rem"
                    _hover={{ background: "gray.100", cursor: "pointer" }}
                    onClick={() => {
                      getUserFound(userFound);
                      onClose();
                    }}
                  >
                    {`${userFound.firstname} ${userFound.lastname}`}
                  </ListItem>
                ))}
              </List>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Fermer
            </Button>
            <Button colorScheme="blue">Créer</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

CreateConversation.propTypes = {
  setSelectedUser: PropTypes.func,
};

CreateConversation.defaultProps = {
  setSelectedUser: null,
};
