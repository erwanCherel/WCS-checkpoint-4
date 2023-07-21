const AbstractManager = require("./AbstractManager");

class ConversationManager extends AbstractManager {
  constructor() {
    super({ table: "conversation" });
  }

  // findConversations(id) {
  //   return this.database.query(
  //     `SELECT c.* FROM conversation c INNER JOIN user_conversation uc ON c.id = uc.conversation_id WHERE uc.user_id = ?`,
  //     [id]
  //   );
  // }

  insert(conversation) {
    return this.database.query(
      `insert into ${this.table} (name, user1_id, user2_id) value (?, ?, ?)`,
      [conversation.name, conversation.user1_id, conversation.user2_id]
    );
  }

  findConversations(userId) {
    return this.database.query(
      `SELECT 
        c.id AS id,
        c.name AS name,
        JSON_OBJECT(
          'id', u1.id,
          'firstname', u1.firstname,
          'lastname', u1.lastname,
          'email', u1.email,
          'picture', u1.picture
        ) AS user1_id,
        JSON_OBJECT(
          'id', u2.id,
          'firstname', u2.firstname,
          'lastname', u2.lastname,
          'email', u2.email,
          'picture', u2.picture
        ) AS user2_id
      FROM conversation AS c
      INNER JOIN user_conversation uc ON c.id = uc.conversation_id
      INNER JOIN user u1 ON c.user1_id = u1.id
      INNER JOIN user u2 ON c.user2_id = u2.id
      WHERE uc.user_id = ?`,
      [userId]
    );
  }
}

module.exports = ConversationManager;
