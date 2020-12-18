const teacherRepository = require('../repositories/teacherRepository');

async function getTeachers(req, res){
    const teachers = await teacherRepository.listTeachersByTests();
    return res.status(200).send(teachers);
}

module.exports = {
    getTeachers
}