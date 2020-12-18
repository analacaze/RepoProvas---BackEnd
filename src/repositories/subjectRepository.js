const connection = require('../database');

async function listSubjectsByTests(){
    const subjects = await connection.query(
        `SELECT disciplinas.id, disciplinas.name, COUNT(disciplinas.id) as "number"
        FROM provas JOIN disciplinas ON provas.id_disciplina=disciplinas.id
        GROUP BY disciplinas.id, disciplinas.name
        ORDER BY disciplinas.name ASC`);
    return subjects.rows;
}

module.exports = {
    listSubjectsByTests
};