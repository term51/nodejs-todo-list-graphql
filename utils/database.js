const Sequelize = require('sequelize');

const SCHEMA_NAME = 'course-node-todo';
const USER_NAME = 'root';
const PASSWORD = '';

const sequelize = new Sequelize(SCHEMA_NAME, USER_NAME, PASSWORD, {
   host: 'localhost',
   dialect: 'mysql'
});


module.exports = sequelize;