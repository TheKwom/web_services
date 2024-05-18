const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts",
    description: "This is a description",
  },
  host: "localhost:3500",
  schemes: ["http"],
};
console.log(doc);
const outputFile = "./swagger-output.json";
const routes = ["./routes/index.js"];

swaggerAutogen(outputFile, routes, doc);
