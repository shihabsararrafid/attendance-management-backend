const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const generateKeyPair = () => {
  return crypto.generateKeyPairSync("rsa", {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
    },
  });
};

const tokenKey = generateKeyPair();
// const __dirname = path.resolve();
const rootPath = path.resolve(__dirname, "../../");
/**
 * here i am creating two keys for implementation of rsa algorithom which will help us to authenticate the user
 * using jwt
 */
fs.writeFileSync(
  path.join(rootPath, "secretKeys/tokenPublic.pem"),
  tokenKey.publicKey,
  "utf8"
);
fs.writeFileSync(
  path.join(rootPath, "secretKeys/tokenPrivate.pem"),
  tokenKey.privateKey,
  "utf8"
);
