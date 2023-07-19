const AbstractManager = require("./AbstractManager");

class ConversationManager extends AbstractManager {
  constructor() {
    super({ table: "conversation" });
  }

  findConversations(id) {
    return this.database.query(
      `SELECT c.* FROM conversation c INNER JOIN user_conversation uc ON c.id = uc.conversation_id WHERE uc.user_id = ?`,
      [id]
    );
  }
}

module.exports = ConversationManager;
