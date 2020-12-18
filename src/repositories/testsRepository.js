const connection = require('../database');

async function listTests(){
    const tests = await connection.query('SELECT * FROM provas');
    return tests.rows;
}

module.exports = {
    listTests
};