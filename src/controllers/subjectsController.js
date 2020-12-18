const subjectRepository = require('../repositories/subjectRepository');

async function getSubjects(req, res){
    const subjects = await subjectRepository.listSubjectsByTests();
    return res.status(200).send(subjects);
}

module.exports = {
    getSubjects
}