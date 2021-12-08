const connection = {

    dbName: 'PI', //dbname here
    options: {
        host: 'localhost',
        dialect: 'mysql',
    },
    user: {
        username: 'root',
        password: 'XXXX' //your pass here
    }
};

const Sequelize = require("sequelize");
const sequelize = new Sequelize(connection.dbName, connection.user.username, connection.user.password, connection.options);

module.exports = {
    connection,
    startConnection,
    Sequelize: Sequelize,
    sequelize: sequelize
};

function startConnection() {
        
    //Autenticação no SQL para ter a certeza que ligação foi feita!
    sequelize.authenticate().then( () => {
        console.log("Connected to the DB")
    }).catch((err) => {
        console.log("Connection Failed. " + err)
    })

    /*
    const conn = new Sequelize(
        connection.dbName,
        connection.user.username,
        connection.user.password,
        connection.options
    )
    conn.authenticate((err, client) => {
        if (err) return console.log(err);

        console.log(client)
        module.exports.conn = client;

        return;
    })*/
};

function simpleExecute() {

}