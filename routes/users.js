var express = require("express");
var router = express.Router();

const mysql = require("mysql2");

/* GET users listing. */
router.get("/", function (req, res, next) {
  req.app.locals.con.connect((err) => {
    if (err) {
      console.log("err", err);
    }

    let saveUserName = "Nils";
    let saveUserEmail = "nisse@mail.com";

    // let sql = `INSERT INTO users (userName, userEmail) VALUES ("${saveUserName}", "${saveUserEmail}")`;
    // let sql = `SELECT * FROM users`;
    let sql = `SELECT userName, userEmail FROM users`;

    req.app.locals.con.query(sql, (err, result) => {
      if (err) {
        console.log("err", err);
      }
      console.log("result", result);
      res.send(result);
    });
  });
});

module.exports = router;
