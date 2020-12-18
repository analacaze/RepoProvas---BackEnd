const express = require("express");
const cors = require("cors");
const app = express();

const testsController = require('./controllers/testsController');
const teachersController = require('./controllers/teachersController');
const subjectsController = require('./controllers/subjectsController');

app.use(cors());
app.use(express.json());

//Tests routes
app.get("/api/tests/teacher/:id", testsController.getTestsByTeachers);
app.get("/api/tests/subject/:id", testsController.getTestsBySubjects);

//Teachers routes
app.get("/api/teachers" , teachersController.getTeachers);

//Subjects routes
app.get("/api/subjects" , subjectsController.getSubjects);


module.exports = app;