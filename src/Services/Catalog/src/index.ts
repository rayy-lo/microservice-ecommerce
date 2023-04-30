import createServer from "../src/utils/createServer";

const app = createServer();

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
