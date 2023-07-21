import { Flex, Spinner, Text, Avatar } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { useUserContext } from "../../contexts/UserContext";
import CreateConversation from "./CreateConversation";

export default function SideBar({
  setConversationUser,
  conversations,
  setConversations,
}) {
  const { user } = useUserContext();
  const [selectedUser, setSelectedUser] = useState({});

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

  // FETCH ALL THE CONVERSATIONS
  const getConversation = () => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/users/${user.id}/conversations`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setConversations(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getConversation();
  }, []);

  // CREATE A NEW CONV
  useEffect(() => {
    if (selectedUser) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/conversations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `conversation_${user.id}${selectedUser.id}`,
          user1_id: user.id,
          user2_id: selectedUser.id,
        }),
      })
        // .then((res) => res.json())
        .then((data) => {
          console.info(data);
          getConversation();
        })
        .catch((err) => {
          console.info(err);
        });
    }
  }, [selectedUser]);

  return (
    <Flex
      height="100vh"
      w="300px"
      bg="element.gray"
      flexDirection="column"
      boxShadow="md"
    >
      <Flex p="1rem" gap="1rem" alignItems="center">
        <Avatar
          size="md"
          name={`${user.firstname} ${user.lastname}`}
          src={user.picture}
        />
        <Text>Mon profil</Text>
      </Flex>

      <CreateConversation
        setSelectedUser={setSelectedUser}
        getConversation={getConversation}
      />
      <Flex className="sidebar" overflowY="scroll" flexDirection="column">
        {conversations.map((conversation) =>
          conversation.user1_id.id === user.id ? (
            <Flex
              alignItems="center"
              bg="element.white"
              p="1rem"
              gap="1rem"
              _hover={{ opacity: ".9", cursor: "pointer" }}
              onClick={() => {
                getConversationUser(conversation);
              }}
              key={conversation.id}
            >
              <Avatar
                size="lg"
                name={`${conversation.user2_id.firstname} ${conversation.user2_id.lastname}`}
                src={conversation.user2_id.picture}
              />
              <Text>
                {conversation.user2_id.firstname}{" "}
                {conversation.user2_id.lastname}
              </Text>
            </Flex>
          ) : (
            <Flex
              alignItems="center"
              bg="element.white"
              p="1rem"
              gap="1rem"
              _hover={{ opacity: ".9", cursor: "pointer" }}
              onClick={() => {
                getConversationUser(conversation);
              }}
              key={conversation.id}
            >
              <Avatar
                size="lg"
                name={`${conversation.user1_id.firstname} ${conversation.user1_id.lastname}`}
                src={conversation.user1_id.picture}
              />
              <Text>
                {conversation.user1_id.firstname}{" "}
                {conversation.user1_id.lastname}
              </Text>
            </Flex>
          )
        )}
      </Flex>
    </Flex>
  );
}

SideBar.propTypes = {
  setConversationUser: PropTypes.func,
  conversations: PropTypes.arrayOf(PropTypes.objectOf),
  setConversations: PropTypes.arrayOf,
};

SideBar.defaultProps = {
  setConversationUser: null,
  conversations: [{}],
  setConversations: [],
};
