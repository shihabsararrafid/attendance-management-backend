const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const publicKey = fs.readFileSync(
  path.resolve("secretKeys/tokenPublic.pem"),
  "utf-8"
);
const privateKey = fs.readFileSync(
  path.resolve("secretKeys/tokenPrivate.pem"),
  "utf-8"
);
module.exports.createQrToken = (payload, duration) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      privateKey,
      { algorithm: "RS256", expiresIn: `${duration}s` },
      (err, token) => {
        if (err) reject(err);
        else resolve(token);
      }
    );
  });
};
module.exports.verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, publicKey, (err, payload) => {
      if (err) reject(err);
      else resolve(payload);
    });
  });
};
