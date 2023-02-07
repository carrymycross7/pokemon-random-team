const connectDB = require("../dbConn");
const { Sequelize, DataTypes, Model, Op } = require('sequelize');
const _ = require('lodash');

const Model_Cache = {
    initialized: false,
    getSql:() => connectDB()
}

async function get_models () {
    
    const {sequelize} = Model_Cache.getSql();
    
    const BaseOptions = {
        sequelize: sequelize,
        freezeTableName: true,
        timestamps: false
    };
    
    class pokemon extends Model {}
    
    pokemon.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'number',
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name',
        },
        games: {
            type: DataTypes.JSONB,
            field: 'games'
        }
    }, _.merge({}, BaseOptions, {
        tableName: 'pokemon'
    }));
    
    _.merge(Model_Cache, {
        pokemon
    },{initialized: true});
    
    return Model_Cache;
}

module.exports = {
    get_models,
    Op: Op
}