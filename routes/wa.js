const express = require("express");
const router = express.Router();

router.post("/send-wa", async (req, res) => {
  const appModule = require("../app");
  const client = appModule.client;
  const { phone, message } = req.body;
  const chatId = `${phone}@c.us`;

  if (!client.info) {
    return res
      .status(503)
      .json({ success: false, error: "WhatsApp belum login" });
  }

  try {
    const result = await client.sendMessage(chatId, message);
    res.json({ success: true, detail: result.body });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
