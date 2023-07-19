const AbstractManager = require("./AbstractManager");

class MessageManager extends AbstractManager {
  constructor() {
    super({ table: "message" });
  }
}

module.exports = MessageManager;
