const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" }); // need to declare once in your global file
// const PORT = process.env.PORT;
const PORT = 8080;

const bodyParser = require("body-parser");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const GOOGLE_KEY = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(GOOGLE_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

app.use(bodyParser.json());
app.use(cors());

app.post("/generate-response", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const result = await model.generateContent(userMessage);
    const response = await result.response;
    console.log("Response->>>>", response);
    const text = response.text();
    console.log("Text ->>>>>", text);
    res.json({ message: text });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error generating response" });
  }
});

// to use conn.js content
require("./db/conn");

// a middleware that converts json data into object format
app.use(express.json());

app.use(require("./route/auth"));

// const User = require("./model/userSchema");

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
