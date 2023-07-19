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
}

module.exports = MessageManager;
