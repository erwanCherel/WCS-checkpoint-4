import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { useUserContext } from "../../contexts/UserContext";

export default function Conversation({
  conversationUser,
  conversationOtherUser,
  setSocket,
  socketClient,
}) {
  const [messages, setMessages] = useState();
  const { user } = useUserContext();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  };

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
        })
        .catch((err) => {
          console.error(err);
          setMessages([]);
        });
    }
  };

  useEffect(() => {
    getMessages();

    socketClient.on("updateMessages", () => {
      getMessages();
    });

    setSocket(socketClient);
  }, [conversationUser]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Flex flex="1">
      {messages ? (
        <Flex
          flexDir="column"
          overflowY="scroll"
          flex="1"
          maxH="80vh"
          className="conversation"
        >
          {messages.map((message) =>
            message.sender_id === user.id ? (
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
                  <Flex ref={messagesEndRef} />
                </Flex>
                <Avatar src={user.picture} />
              </Flex>
            ) : (
              <Flex
                p="2rem 3rem"
                key={message.id}
                alignItems="center"
                gap="2rem"
              >
                <Avatar src={conversationOtherUser.picture} />
                <Flex flexDir="column">
                  <Flex ml="1rem">
                    {conversationOtherUser.firstname}{" "}
                    {conversationOtherUser.lastname}
                  </Flex>
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
  conversationOtherUser: PropTypes.shape({
    email: PropTypes.string,
    firstname: PropTypes.string,
    id: PropTypes.number,
    lastname: PropTypes.string,
    picture: PropTypes.string,
  }),
  setSocket: PropTypes.func.isRequired,
  socketClient: PropTypes.func.isRequired,
};

Conversation.defaultProps = {
  conversationUser: null,
  conversationOtherUser: null,
};
