var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get("/new", function(req, res, next) {
  res.render('form', { title: 'Post a message' })
})

router.post("/new", function(req, res, next) {
  console.log("New data")
  console.log(req.body)
  const message = req.body.messageText
  const user = req.body.messageUser
  
  console.log("Adding item to list")
  messages.push({text: message, user: user, added: new Date()})
  console.log("List is now ", messages.length)
  res.redirect("/")
})

module.exports = router;
