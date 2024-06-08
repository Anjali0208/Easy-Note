const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");
const cookieParser = require("cookie-parser");
router.use(cookieParser());
// const multer = require("multer");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.cookie("Test", "token");
  res.send("auth.js");
});

// USING PROMISES
// router.post("/register", (req, res) => {
//   const { name, phone, email, password, cpassword } = req.body;

//   if (!name || !phone || !email || !password || !cpassword) {
//     return res.status(422).json({ error: "fill the all fields!" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ message: "already registered" });
//       }
//       const user = new User({ name, phone, email, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "user registered" });
//         })
//         .catch((err) => {
//           consol.log(err);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// USING ASYNC-AWAIT
router.post("/register", async (req, res) => {
  const { name, phone, email, password, cpassword } = req.body;

  if (!name || !phone || !email || !password || !cpassword) {
    return res.status(422).json({ error: "fill the all fields!" });
  }

  try {
    // to check if user exists
    const userExist = await User.findOne({ email: email }); // we will put await from where we are getting the email
    // a promise(.then()) or data

    if (userExist) {
      return res.status(422).json({ message: "user already exists!" });
    } else if (password != cpassword) {
      return res.status(422).json({ message: "password does not match" });
    } else {
      const user = new User({ name, phone, email, password, cpassword });

      await user.save(); // save user data for registration

      res.status(201).json({ message: "User Registration Successful" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body; // user given info

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all fields " });
    }

    const userLogin = await User.findOne({ email: email }); // first email is from database and 2nd email is from the req.body

    if (userLogin) {
      // to check if the login's password or the register's password is matching or not with the help of compare()
      const isMatch = await bcrypt.compare(password, userLogin.password);
      token = await userLogin.generateAuthToken();
      // console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.json({ err: "Invalid credential" });
      } else {
        res.json({ message: "signned in successfully" });
        // console.log(userLogin);
      }
    } else {
      res.status(400).json({ message: "No such user found" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/about", authenticate, (req, res) => {
  res.send(req.rootUser);
});

router.get("/getdata", authenticate, (req, res) => {
  res.send(req.rootUser);
});

router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(422).json({ error: "Fill the field" });
    }
    const userContact = await User.findOne({ _id: req.userId });

    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );
      await userContact.save();
      return res.status(201).json({ message: "Message Sent " });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/logout", authenticate, (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send(req.rootUser);
});

module.exports = router;
