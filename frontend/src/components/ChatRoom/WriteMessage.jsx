import { Button, Flex, Icon, Textarea } from "@chakra-ui/react";
import { BsFillSendFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserContext";

export default function WriteMessage({
  conversationUser,
  conversationOtherUser,
  setSocket,
  socket,
  socketClient,
}) {
  const [userMessage, setUserMessage] = useState("");
  const { user } = useUserContext();

  const handleTextareaChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (userMessage) {
      socket.emit("sendMessage", {
        content: userMessage,
        sender_id: user.id,
        recipient_id: conversationOtherUser.id,
        conversation_id: conversationUser.id,
      });
    }

    setUserMessage("");
  };

  useEffect(() => {
    setSocket(socketClient);
  }, []);

  return (
    <form onSubmit={handleOnSubmit}>
      <Flex>
        {conversationUser ? (
          <Flex flex="1" alignItems="center" p="1rem" gap="1rem">
            <Textarea
              placeholder="..."
              value={userMessage}
              onChange={handleTextareaChange}
              bg="element.white"
              focusBorderColor="element.gray"
              isRequired
            />
            <Button type="submit" size="lg" p="1rem">
              <Icon as={BsFillSendFill} />
            </Button>
          </Flex>
        ) : null}
      </Flex>
    </form>
  );
}

WriteMessage.propTypes = {
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
  socket: PropTypes.objectOf.isRequired,
};

WriteMessage.defaultProps = {
  conversationUser: null,
  conversationOtherUser: null,
};
