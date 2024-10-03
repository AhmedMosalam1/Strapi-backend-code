const strapi = require("@strapi/strapi");

const startStrapi = async () => {
  const app = await strapi().start();

  module.exports = app;
};

startStrapi();
