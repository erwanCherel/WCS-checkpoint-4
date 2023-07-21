import { Box, Flex, Spinner } from "@chakra-ui/react";
// import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { useUserContext } from "../contexts/UserContext";
import NavBar from "../components/ChatRoom/NavBar";
import SideBar from "../components/ChatRoom/SideBar";
import WriteMessage from "../components/ChatRoom/WriteMessage";
import Conversation from "../components/ChatRoom/Conversation";

export default function ChatRoom() {
  const { user } = useUserContext();
  const [conversations, setConversations] = useState([]);
  const [conversationUser, setConversationUser] = useState();
  const [conversationOtherUser, setConvertionOtherUSer] = useState();
  const [socket, setSocket] = useState();
  const socketClient = socketIOClient("http://localhost:5000");

  useEffect(() => {
    if (conversationUser) {
      if (user.id === conversationUser.user1_id.id) {
        setConvertionOtherUSer(conversationUser.user2_id);
      } else if (user.id === conversationUser.user2_id.id) {
        setConvertionOtherUSer(conversationUser.user1_id);
      }
    }
  }, [conversationUser]);

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
        <SideBar
          setConversationUser={setConversationUser}
          conversations={conversations}
          setConversations={setConversations}
          conversationOtherUser={conversationOtherUser}
        />
        <Flex flexDirection="column" flex="1" bg="element.grayFB">
          <NavBar conversationUser={conversationUser} />
          <Conversation
            conversationUser={conversationUser}
            conversationOtherUser={conversationOtherUser}
            setSocket={setSocket}
            socketClient={socketClient}
          />
          <WriteMessage
            conversationUser={conversationUser}
            conversationOtherUser={conversationOtherUser}
            socket={socket}
            setSocket={setSocket}
            socketClient={socketClient}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
