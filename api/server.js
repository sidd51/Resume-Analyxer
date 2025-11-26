// api/server.js
const path = require("path");
const { createRequestHandler } = require("react-router");

// Load the server build output from React Router
const build = require("../build/server/index.js");

module.exports = async (req, res) => {
  try {
    const handler = createRequestHandler({ build });
    return handler(req, res);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
};
