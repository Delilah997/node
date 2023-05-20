import {Sequelize} from 'sequelize'

const db = new Sequelize('database_app', 'root', 'uS2ppKTTChILynQHk4TZ',{
    host: 'containers-us-west-105.railway.app',
    port: '5549',
    dialect: 'mysql'
})

export default db