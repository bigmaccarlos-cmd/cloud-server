
const crypto = require("crypto");
const { generateToken04 } = require("./ZegoServerAssistant");

function createZegoToken(userId) {
  const appId = Number(process.env.ZEGO_APP_ID);
  const secret = process.env.ZEGO_SERVER_SECRET;

  if (!appId || !secret) {
    throw new Error("ZEGO server configuration is missing");
  }

  if (
    typeof userId !== "string" ||
    !/^[a-zA-Z0-9_-]{1,64}$/.test(userId)
  ) {
    throw new Error("Invalid user ID");
  }

  return generateToken04(
    appId,
    userId,
    secret,
    3600,
    ""
  );
}

module.exports = { createZegoToken };
