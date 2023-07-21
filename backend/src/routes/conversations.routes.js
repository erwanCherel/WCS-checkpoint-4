const router = require("express").Router();

const conversationsControllers = require("../controllers/conversationControllers");
const messageControllers = require("../controllers/messageControllers");
const userConversationControllers = require("../controllers/userConversationControllers");

router.get("/", conversationsControllers.browse);
router.get("/:id", conversationsControllers.read);
router.get("/:id/messages", messageControllers.getMessagesConversation);
router.put("/:id", conversationsControllers.edit);
router.post("/", conversationsControllers.add, userConversationControllers.add);
router.delete("/:id", conversationsControllers.destroy);

module.exports = router;
