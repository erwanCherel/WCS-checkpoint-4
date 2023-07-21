const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findByEmail(email) {
    return this.database.query(`SELECT * FROM  ${this.table} WHERE email=?`, [
      email,
    ]);
  }

  findOneUser(id) {
    return this.database.query(
      `select id, firstname, lastname, email, picture FROM ${this.table} where id = ?`,
      [id]
    );
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, picture, hashedPassword) value (?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.picture,
        user.hashedPassword,
      ]
    );
  }

  findByFirstName(sql, sqlValues) {
    return this.database.query(`${sql}`, sqlValues);
  }
}

module.exports = UserManager;
