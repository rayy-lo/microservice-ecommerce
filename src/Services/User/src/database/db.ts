import mysql from "mysql2/promise";

const createConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: "user-db",
      user: process.env.USER_USER,
      password: process.env.USER_USER_PASS,
      database: process.env.USER_DB,
    });

    console.log("connected as id " + connection.threadId);
    return connection;
  } catch (err) {
    if (err) {
      console.error("error connecting: " + err);
      return;
    }
  }
};

export { createConnection };
