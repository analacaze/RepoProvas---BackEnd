const connection = require('../database');

async function listTeachersByTests(){
    const teachers = await connection.query(
        `SELECT professores.id, professores.name, COUNT(professores.id) as "number"
        FROM provas JOIN professores ON provas.id_professor=professores.id
        GROUP BY professores.id, professores.name
        ORDER BY professores.name ASC`);
    return teachers.rows;
}

module.exports = {
    listTeachersByTests
};