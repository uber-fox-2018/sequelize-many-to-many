const express = require("express")
const bodyParser = require("body-parser")
const Models = require("./models")

const app = express()

const Teacher = Models.Teacher
const Subject = Models.Subject


// using lib 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// setting
app.set('view engine', 'ejs');

// lihat semua data guru dan subject
app.get('/teachers', (req, res) => {
	Teacher
		.findAll({
			include: [Subject],
			order: [
				['id', 'ASC']
			]
		})
		.then((teachers) => {
			res.render('vteacher', {teachers : teachers})
		})
})

// insert data guru form
app.get('/teacher', (req, res) => {
	let objTeachers = {
		firstName: '',
	    lastName: '',
	    email: ''
	}
	let data = {
		msg: '',
		user: objTeachers
	}
	res.render('vformteacher', data)
})

// insert data guru submit
app.post('/teacher', (req, res) => {
	let objTeachers = {
		firstName: req.body.firstName,
	    lastName: req.body.lastName,
	    email: req.body.email
	}
	Teacher
		.create(objTeachers)
		.then((teacher) => {
			console.log(teacher)
		})
		.catch( (err) => {
			let data = {
				msg: err.message,
				user: objTeachers
			}
			res.render('vformteacher', data)
		})
})

// ambil data subject dan guru
app.get('/subjects', (req, res) => {
	Subject
		.findAll({
			include: [Teacher]
		})
		.then((subjects) => {
			console.log(subjects)
			res.render('vsubject', {subjects: subjects})
		})
})



app.post('/subject-teacher', (req, res) => {
	Subject.create({
		name: "Ekonomi"
	})
})

app.listen(3000, () => {
	console.log("Server is running now ...")
})