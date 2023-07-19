import { Box, Flex, Spinner } from "@chakra-ui/react";
// import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../contexts/UserContext";
import NavBar from "../components/ChatRoom/NavBar";
import SideBar from "../components/ChatRoom/SideBar";
import WriteMessage from "../components/ChatRoom/WriteMessage";
import Conversation from "../components/ChatRoom/Conversation";

export default function ChatRoom() {
  const { user } = useUserContext();
  const [conversationUser, setConversationUser] = useState();

  if (!user) {
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

  return (
    <Box>
      <Flex flex="1">
        <SideBar setConversationUser={setConversationUser} />
        <Flex flexDirection="column" flex="1" bg="element.grayFB">
          <NavBar conversationUser={conversationUser} />
          <Conversation conversationUser={conversationUser} />
          <WriteMessage conversationUser={conversationUser} />
        </Flex>
      </Flex>
    </Box>
  );
}
