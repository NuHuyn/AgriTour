const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Agritour API",
      version: "1.0.0",
      description: "API documentation for Agritour system",
    },
    servers: [
      {
        url: "https://agritourweb.onrender.com", // sửa ở đây!
      },
    ],
  },

  apis: [
    path.join(__dirname, "routes/*.js"),
    path.join(__dirname, "controllers/*.js"),
  ],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
