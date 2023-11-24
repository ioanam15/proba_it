express = require("express");
bodyParser = require("body-parser");
cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const port = 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});