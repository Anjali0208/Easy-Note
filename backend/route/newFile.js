const { router } = require("./auth");

router.post("/login", async (req, res) => {
  try {
    if (!email || !password) {
      return res.json({ message: "Please fill all fields " });
    }
  } catch (err) {}
});
