const express = require("express");
require("./db/mongoose");
const taskRouter = require("./routers/task");
const userRouter = require("./routers/user");

const app = express();
const port = process.env.PORT || 4000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests not allowed");
//   } else {
//     next();
//   }
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("server is running on port " + port);
});
