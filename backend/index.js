const mongoose = require('mongoose');

express = require("express");
bodyParser = require("body-parser");
cors = require("cors");
require('dotenv/config')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const User = require("./userSchema");
const pollSchema = require('./pollSchema');
const port = 5000;

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI).then(() => console.log("Connected to MongoDB"));

app.get("/user", async (req, res) => {
    const cineva = await User.find({email: "al"});
    if (cineva.email)
      res.send("eroare");
    else
      res.send("nu exista inainte");
})

app.post("/register", async (req, res) => {
  const email = req.body.email;
  const cineva = await User.find({email: email});
    if (cineva.email)
      res.json({error: "That email address is already in use!"});
    else {
      const password = req.body.password;
      const myUser = new User ({email: email, password: password});
      myUser.save();
    }
})

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const cineva = await User.find({email: email});
  if (!cineva.email)
    res.json({error: "The email address or password you entered is invalid!"});
  else {
    const pwd = req.body.password;
    if (cineva.password != pwd)
    {
      res.json({error: "The email address or password you entered is invalid!"});
    }
    else {
      const token = await jwt.sign({ email: email }, SECRET);
        res.json({ token });
    }
  }
})

const isLogged = (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    }); 
}

app.post("/poll", async (req, res) => {
  const title = req.body.title;
  const type = req.body.type;
  const answ1 = req.body.answ1;
  const answ2 = req.body.answ2;
  const answ3 = req.body.answ3;
  const myPoll = new Poll ({title: title, votingType: type, answers: {varianta: answ1, varianta: answ2, varianta: answ3}});
  await myPoll.save();
})

app.get("/poll", async (req, res) => {
  const polls = await Poll.find({});
  res.json(polls);
})

app.delete("/poll/:id", async (req, res) => {
  const id = req.body.id;
  Poll.delete({id: id});
  res.json("Poll deleted");
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});