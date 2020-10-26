const PORT = process.env.PORT;
let MONGODB_URI = process.env.MONGODB_URI;

// During Testing a different database a used hence the change of URI
if (process.env.NODE_ENV === "test") {
  MONGODB_URI = process.env.TEST_MONGODB_URI;
}

module.exports = {
  MONGODB_URI,
  PORT,
};