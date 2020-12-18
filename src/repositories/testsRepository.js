const connection = require('../database');

async function listTestsByTeacher(id){
    const tests = await connection.query(`
    SELECT  provas.name as "nomeProvas", 
            categorias.name as "nomeCategoria", 
            disciplinas.name as "nomeDisciplina",
            provas.link
    FROM provas JOIN categorias ON provas.id_categoria=categorias.id 
                JOIN disciplinas ON provas.id_disciplina=disciplinas.id
    WHERE provas.id_professor = $1
    ORDER BY categorias.name ASC
    `,[id]);
    return tests.rows;
}

async function listTestsBySubjects(id){
    const tests = await connection.query(`
    SELECT  provas.name as "nomeProvas", 
            categorias.name as "nomeCategoria",     
            professores.name as "nomeProfessor", 
            provas.link
    FROM provas JOIN categorias ON provas.id_categoria=categorias.id 
    JOIN professores ON provas.id_professor=professores.id
    WHERE provas.id_disciplina = $1
    ORDER BY categorias.name ASC
    `,[id]);
    return tests.rows;
}

module.exports = {
    listTestsByTeacher,
    listTestsBySubjects
};