import { Flex, Spinner, Text, Avatar, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import PropTypes from "prop-types";
import { useUserContext } from "../../contexts/UserContext";

export default function SideBar({ setConversationUser }) {
  const { user } = useUserContext();
  const [conversations, setConversations] = useState([]);

  if (!conversations) {
    return (
      <Flex flex="1" h="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          m="auto"
        />
      </Flex>
    );
  }

  const getConversationUser = (conversation) => {
    setConversationUser({ ...conversation });
  };

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/users/${user.id}/conversations`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setConversations(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Flex
      minH="100vh"
      w="300px"
      bg="element.gray"
      flexDirection="column"
      boxShadow="md"
    >
      <Flex p="1rem" gap="1rem" alignItems="center">
        <Avatar size="md" name={`${user.firstname} ${user.lastname}`} />
        <Text>Mon profil</Text>
      </Flex>
      <Flex
        bg="element.blue"
        color="element.white"
        p=".5rem 1rem"
        boxShadow="md"
        zIndex="100"
        alignItems="center"
        justify="space-between"
        _hover={{ opacity: ".9", cursor: "pointer" }}
      >
        <Text fontWeight="bold" fontSize="1.1rem">
          Créer une conversation
        </Text>
        <Icon id="iconAdd" as={AiOutlinePlus} boxSize={10} />
      </Flex>
      {conversations.map((conversation) => (
        <Flex
          alignItems="center"
          bg="element.white"
          p="1rem"
          gap="1rem"
          _hover={{ opacity: ".9", cursor: "pointer" }}
          onClick={() => getConversationUser(conversation)}
          key={conversation.id}
        >
          <Avatar
            size="lg"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
          <Text>{conversation.name}</Text>
        </Flex>
      ))}
    </Flex>
  );
}

SideBar.propTypes = {
  setConversationUser: PropTypes.func,
};

SideBar.defaultProps = {
  setConversationUser: null,
};
