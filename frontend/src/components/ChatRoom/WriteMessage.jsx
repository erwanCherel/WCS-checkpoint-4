import { Button, Flex, Icon, Textarea } from "@chakra-ui/react";
import { BsFillSendFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { useState } from "react";

export default function WriteMessage({ conversationUser }) {
  const [userMessage, setUserMessage] = useState("");

  const handleTextareaChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.info(userMessage);
    setUserMessage("");
  };

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
};

WriteMessage.defaultProps = {
  conversationUser: null,
};
