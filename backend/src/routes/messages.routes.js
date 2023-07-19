const router = require("express").Router();

const messagesControllers = require("../controllers/messageControllers");

router.get("/", messagesControllers.browse);
router.get("/:id", messagesControllers.read);
router.put("/:id", messagesControllers.edit);
router.post("/", messagesControllers.add);
router.delete("/:id", messagesControllers.destroy);

module.exports = router;
