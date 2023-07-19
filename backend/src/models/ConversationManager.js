const AbstractManager = require("./AbstractManager");

class ConversationManager extends AbstractManager {
  constructor() {
    super({ table: "conversation" });
  }
}

module.exports = ConversationManager;
