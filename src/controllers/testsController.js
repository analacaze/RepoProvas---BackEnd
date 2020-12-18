const testsRepository = require('../repositories/testsRepository');

async function getTestsByTeachers(req, res){
    const { id } = req.params;
    const tests = await testsRepository.listTestsByTeacher(id);
    return res.status(200).send(tests);
}

async function getTestsBySubjects(req, res){
    const { id } = req.params;
    const tests = await testsRepository.listTestsBySubjects(id);
    return res.status(200).send(tests);
}

module.exports = {
    getTestsByTeachers,
    getTestsBySubjects
}