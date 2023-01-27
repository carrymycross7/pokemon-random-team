const {Sequelize, DataTypes, QueryTypes } = require('sequelize');

const db = {
    user: 'postgres',
    pass: 'galatians220',
    host_name: 'localhost',
    name: 'pokemon',
    port: 5432
    
}

const conn_str = `postgres://${db.user}:${db.pass}@${db.host_name}:${db.port}/${db.name}?sslmode=disable`
const sequelize = new Sequelize(conn_str);

const connect = () => {
    return sequelize;
}

module.exports = connect;