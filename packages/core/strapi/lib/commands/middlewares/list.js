'use strict';

const CLITable = require('cli-table3');
const chalk = require('chalk');

const strapi = require('../../index');

module.exports = async function() {
  const app = await strapi().load();

  const list = app.middlewares;

  const infoTable = new CLITable({
    head: [chalk.blue('Name')],
  });

  Object.keys(list).forEach(name => {
    infoTable.push([name]);
  });

  console.log(infoTable.toString());

  await app.destroy();
};
