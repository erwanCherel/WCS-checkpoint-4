const AbstractManager = require("./AbstractManager");

class MessageManager extends AbstractManager {
  constructor() {
    super({ table: "message" });
  }

  findAllMessages(id) {
    return this.database.query(
      `SELECT * from  ${this.table} WHERE conversation_id = ?`,
      [id]
    );
  }

  insert(message) {
    return this.database.query(
      `insert into ${this.table} (content, sender_id, recipient_id, conversation_id) value (?, ?, ?, ?)`,
      [
        message.content,
        message.sender_id,
        message.recipient_id,
        message.conversation_id,
      ]
    );
  }
}

module.exports = MessageManager;
