const testsRepository = require('../repositories/testsRepository');

async function getTests(req, res){
    const tests = await testsRepository.listTests();
    return res.status(200).send(tests);
}

module.exports = {
    getTests
}