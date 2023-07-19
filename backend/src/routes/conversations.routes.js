const router = require("express").Router();

const conversationsControllers = require("../controllers/conversationControllers");

router.get("/", conversationsControllers.browse);
router.get("/:id", conversationsControllers.read);
router.put("/:id", conversationsControllers.edit);
router.post("/", conversationsControllers.add);
router.delete("/:id", conversationsControllers.destroy);

module.exports = router;
