require("dotenv").config();
const socketIO = require("socket.io");
const app = require("./src/app");
const models = require("./src/models");

const port = parseInt(process.env.APP_PORT ?? "6000", 10);

const server = app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.info(`Server is listening on ${port}`);
  }
});

const io = socketIO(server, {
  cors: {
    origin: process.env.FRONTEND_URL?.split(",") ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  },
});

// const messages = [
//   { id: uniqid(), author: "server", text: "Welcome to WildChat" },
// ];

io.on("connection", (socket) => {
  console.info("user connected");
  socket.on("disconnect", () => {
    console.info("user disconnected");
  });

  // socket.emit("initialMessageList", messages);

  socket.on("sendMessage", (newMessage) => {
    models.message
      .insert(newMessage)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          io.emit("error");
        } else {
          io.emit("updateMessages", result);
        }
      })
      .catch((err) => {
        console.error(err);
        io.emit("error");
      });
  });
});
