var express = require('express');
var router = express.Router();
var serviceAccount = require("../keys/makepromisesgreatagain-firebase-adminsdk-vb3mc-2dc68ca54f.json");
var app = require("../app")
var ref = app.ref;
var admin = app.admin
// var admin = require('firebase-admin');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://makepromisesgreatagain.firebaseio.com"
// });

/* GET users listing. */
router.get('/*', function(req, res, next) {
  const user = req.params[0]
  console.log(req.params)
  console.log(user)
  ref.once(`${user}`, function(snapshot) {
    console.log(snapshot.val());
  });
  res.send(user);
});

router.post('/signup', function(req, res, next){
  eval(pry.it)
  var usersRef = ref.child(`${res.username}`);
  username = res.username
  profile: ({
    username: {
    walletAdd: "",
    email: res.email,
    firstName: res.firstName,
    lastName: lastName,
    pw: res.password
  }
  })
})

module.exports = router;
