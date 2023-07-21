import { Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function NavBar({ conversationUser }) {
  return (
    <Flex p="1.5rem 1rem" boxShadow="md" bg="element.white" zIndex={100}>
      {conversationUser ? (
        <Text>#{conversationUser.name}</Text>
      ) : (
        <Text>Salons</Text>
      )}
    </Flex>
  );
}

NavBar.propTypes = {
  conversationUser: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    user1_id: PropTypes.number,
    user2_id: PropTypes.number,
  }),
};

NavBar.defaultProps = {
  conversationUser: null,
};
