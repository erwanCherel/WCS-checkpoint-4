const router = require("express").Router();
const itemsRouter = require("./items.routes");
const usersRouter = require("./users.routes");
const messagesRouter = require("./messages.routes");
const conversationsRouter = require("./conversations.routes");

router.use("/items", itemsRouter);
router.use("/users", usersRouter);
router.use("/messages", messagesRouter);
router.use("/conversations", conversationsRouter);

module.exports = router;
