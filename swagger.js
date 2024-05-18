const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts",
    description: "This is a description",
  },
  host: "cse341-spring24-uwqp.onrender.com",
  schemes: ["https"],
};
console.log(doc);
const outputFile = "./swagger-output.json";
const routes = ["./routes/index.js"];

swaggerAutogen(outputFile, routes, doc);
