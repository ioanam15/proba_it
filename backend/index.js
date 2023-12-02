// var popup = document.getElementById("popup");
// var btn = document.getElementById("btn");
// var span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//   popup.style.display = "block";
// }
// span.onclick = function() {
//   popup.style.display = "none";
// }

const mongoose = require('mongoose');

express = require("express");
bodyParser = require("body-parser");
cors = require("cors");
require('dotenv/config')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const port = 5000;

// function nume() {

// }
// const nume = (parametri) => {

// }
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI).then(() => console.log("Connected to MongoDB"));
const MyModel = mongoose.model('Test', new mongoose.Schema({ name: String }));
const user = new MyModel({name: "nume"});
user.save();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});