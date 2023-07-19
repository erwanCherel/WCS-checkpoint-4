import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useUserContext } from "../../contexts/UserContext";

export default function Conversation({ conversationUser }) {
  const [messages, setMessages] = useState();
  const { user } = useUserContext();

  const getMessages = () => {
    if (conversationUser) {
      fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/conversations/${
          conversationUser.id
        }/messages`
      )
        .then((resp) => resp.json())
        .then((data) => {
          setMessages(data);
          console.info(data);
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    getMessages();
  }, [conversationUser]);

  return (
    <Flex flex="1">
      {messages ? (
        <Flex flexDir="column" flex="1">
          {messages.map((message) =>
            message.user_id === user.id ? (
              <Flex
                p="2rem 3rem"
                key={message.id}
                justifyContent="end"
                alignItems="center"
                gap="2rem"
              >
                <Flex flexDir="column">
                  <Flex mr="1rem" justifyContent="end">
                    moi
                  </Flex>
                  <Text bg="element.pink" p="1rem 1.5rem" borderRadius="100px">
                    {message.content}
                  </Text>
                </Flex>
                <Avatar />
              </Flex>
            ) : (
              <Flex
                p="2rem 3rem"
                key={message.id}
                alignItems="center"
                gap="2rem"
              >
                <Avatar />
                <Flex flexDir="column">
                  <Flex ml="1rem">moi</Flex>
                  <Text bg="element.gray" p="1rem 1.5rem" borderRadius="100px">
                    {message.content}
                  </Text>
                </Flex>
              </Flex>
            )
          )}
        </Flex>
      ) : null}
    </Flex>
  );
}

Conversation.propTypes = {
  conversationUser: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    user1_id: PropTypes.number,
    user2_id: PropTypes.number,
  }),
};

Conversation.defaultProps = {
  conversationUser: null,
};
