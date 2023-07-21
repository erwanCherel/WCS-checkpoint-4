/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class UserConversationManager extends AbstractManager {
  constructor() {
    super({ table: "user_conversation" });
  }

  insert({ user_id, conversation_id }) {
    return this.database.query(
      `insert into ${this.table} (user_id, conversation_id) values (?, ?)`,
      [user_id, conversation_id]
    );
  }
}

module.exports = UserConversationManager;
