const router = require("express").Router();

const userControllers = require("../controllers/userControllers");
const authControllers = require("../controllers/authControllers");
const conversationControllers = require("../controllers/conversationControllers");

// GET
router.get("/", userControllers.browse);
router.get("/:id", userControllers.read);
router.get("/:id/conversations", conversationControllers.findConversations);
// router.get(
//   "/:id/conversationsWithUserInformations",
//   conversationControllers.getConvWithUserInfos
// );
// PUT
router.put("/:id", userControllers.edit);

// POST
router.post(
  "/",
  userControllers.hashPassword,
  userControllers.checkEmail,
  userControllers.add
);
router.post(
  "/readCookie",
  authControllers.autoVerifyToken,
  userControllers.autoLogin
);
router.post("/login", userControllers.login, authControllers.createToken);

// DELETE
router.delete("/:id", userControllers.destroy);

module.exports = router;
