
import { Sequelize as CoreSequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';
import { User } from '../models/user.model';
import { QueryTypes, Sequelize } from 'sequelize';
import { Article } from '../models/article_model';
require('dotenv').config()

const config = {
    host: "127.0.0.1",
    port: 5432,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "postgres",
    connection_limit: 100
};

export const sequelize = new CoreSequelize({
    dialect: PostgresDialect,
    database: "postgres",
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: "127.0.0.1",
    port: 5432,
    ssl: false,
    clientMinMessages: 'notice',
    models: [
        User,
        Article
    ]
})

export const run_query = async (query: string, values: any, ) => {
    try {
        const sequelize = new Sequelize(`postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`);
        await sequelize.authenticate();
        let data = await sequelize.query(query, {
            replacements: values,
            type: QueryTypes.SELECT,
        });
        await sequelize.close();
        return data;
    } catch (err: any) {
        console.error(err, query, values);
        throw 'Database query error';
    }
}

export const run_insert = async function run_insert(sql: string, values: any) {
    try {
        const sequelize = new Sequelize(`postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`);
        await sequelize.authenticate();
        let data = await sequelize.query(sql, {
            replacements: values,
            type: QueryTypes.INSERT
        });
        await sequelize.close();
        return data;
    } catch (err: any) {
        console.error(err, sql, values);
        throw 'Database query error';
    }
}

export const update_query = async (query: string, values: any, ) => {
    try {
        const sequelize = new Sequelize(`postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`);
        await sequelize.authenticate();
        let data = await sequelize.query(query, {
            replacements: values,
            type: QueryTypes.UPDATE,
        });
        await sequelize.close();
        return data;
    } catch (err: any) {
        console.error(err, query, values);
        throw 'Database query error';
    }
}

export const delete_query = async (query: string, values: any, ) => {
    try {
        const sequelize = new Sequelize(`postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`);
        await sequelize.authenticate();
        let data = await sequelize.query(query, {
            replacements: values,
            type: QueryTypes.DELETE,
        });
        await sequelize.close();
        return data;
    } catch (err: any) {
        console.error(err, query, values);
        throw 'Database query error';
    }
}