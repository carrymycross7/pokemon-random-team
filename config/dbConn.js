const {Sequelize, DataTypes, QueryTypes } = require('sequelize');
require('dotenv').config();

const conn_str = `postgres://${process.env.USER}:${process.env.PORT}@${process.env.HOST_NAME}:${process.env.PORT}/${process.env.DB_NAME}?sslmode=disable`
const sequelize = new Sequelize(conn_str);

const connect = () => {
    return sequelize;
}

module.exports = connect;