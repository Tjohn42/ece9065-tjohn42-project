const express = require('express');
const app = express();
const dotenv = require('dotenv');

const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

var USERS = [
    { 'id': 1, 'username': 'jemma' },
    { 'id': 2, 'username': 'paul' },
    { 'id': 3, 'username': 'sebastian' },
];

var cors = require('cors');
dotenv.config();

app.use(express.json());
app.use('/', express.static('static'));
app.use(cors());

app.use(bodyParser.json());
app.use(expressJwt({secret: 'todo-app-super-shared-secret',algorithms: ['HS256']}).unless({path: ['/api/auth']}));


app.post('/api/auth', function(req, res) {
  const body = req.body;

  const user = USERS.find(user => user.username == body.username);
  console.log(user,"and", body.password);
  if(!user || body.password != 'todo') return res.sendStatus(401);
  
  var token = jwt.sign({userID: user.id}, 'todo-app-super-shared-secret', {expiresIn: '2h'});
  res.send({token});
});

const fs = require('fs');

let rawdata = fs.readFileSync('../Lab3-timetable-data.json');
let student = JSON.parse(rawdata);
var subject = [];
var myobj ={};

const schedule = [];

for(var i =0; i < student.length; i++){
    myobj = {
        "subject" : student[i].subject,
        "courseNum" : student[i].catalog_nbr,
        "days" : student[i].course_info[0].days,
        "courseComp" : student[i].course_info[0].ssr_component,
        "section" : student[i].course_info[0].class_section,
        "description": student[i].className,
        "startTime" : student[i].course_info[0].start_time,
        "endTime" : student[i].course_info[0].end_time,
    }
    subject.push(myobj);
    if(!student[i].catalog_nbr) {
        console.log("Error");
    }
};

var mysql = require('mysql');
const e = require('express');
const { lookupService } = require('dns');

var con = mysql.createPool({
  host: "glados.cnss1ow8uiuq.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "tempkey123$%^789)",
  port: 3306,
  database: "Lab3",
});


app.get('/api/courses', (req, res) => {
    res.send(subject);
});

app.get('/api/subject/:Name', (req, res) => {
    if((req.params.Name.length > 15) || ((typeof req.params.Name) != "string")){
        res.status(400).send({error: "Invalid Search Paramaters"});
        return
    }
    const course = subject.filter(c => c.subject === req.params.Name); 
    if (!course[0]) res.status(404).send("Not found ");
    res.send(course);
});


app.get('/api/courses/:Name/:Number', (req, res) => {
    if((req.params.Number.length > 15) || ((typeof req.params.Number) != "string")){
        res.status(400).send({error: "Invalid Search Paramaters"});
        return
    }
    const course = subject.filter(c => (c.courseNum === req.params.Number) &&(c.subject === req.params.Name));
    if (!course[0]) res.status(404).send("Not found HERE");
    res.send(course);
});

app.get('/api/courses/:Name/:Number/:Component', (req, res) => {
    if((req.params.Number.length > 15) || ((typeof req.params.Number) != "string")){
        res.status(400).send({error: "Invalid Search Paramaters"});
        return
    }
    const course = subject.filter(c => (c.courseNum === req.params.Number) &&(c.subject === req.params.Name) && (c.courseComp === req.params.Component));
    if (!course[0]) res.status(404).send("Not found HERE");
    res.send(course);
});

app.delete('/api/delete/:Name', (req, res) => {
    if((req.params.Name.length > 15) || ((typeof req.params.Name) != "string")){
        res.status(400).send({error: "Invalid Search Paramaters"});
        return
    }
    const getSchedule = req.params.Name;
    con.getConnection(function(err, connection) {
        if (err) throw err;
        console.log("Connected!");
        connection.query(" DELETE FROM `Schedule` WHERE `ScheduleName` = ?",[getSchedule.toString()],function (err, result) {
        connection.release();
        if (err) throw err;
        console.log("LENGTH,", result.length, result);
        if(!result){
            res.status(404).send("SCHEDULE DOES NOT EXIST");
        }
        else{ console.log("HEREIS,", result); res.send(result);
    }
        });
      });
});

app.delete('/api/delete/', (req, res) => {
    con.getConnection(function(err, connection) {
        if (err) throw err;
        console.log("Connected!");
        connection.query(" DELETE FROM `Schedule`",function (err, result) {
        connection.release();
        if (err) throw err;
        console.log(result.affectedRows);
        if(result.affectedRows < 1){
            res.status(404).send("SCHEDULE DOES NOT EXIST");
        }
        else{ res.send(result);
    }
        });
      });
});


app.get('/api/schedules/:Name', (req, res) => {
   const getSchedule = req.params.Name;
    con.getConnection(function(err, connection) {
        if (err) throw err;
        console.log("Connected!");
        connection.query(" SELECT * FROM `Schedule` WHERE `ScheduleName` = ?",[getSchedule.toString()],function (err, result) {
        connection.release();
        if (err) throw err;
        if(!result.length){
            res.status(404).send("SCHEDULE DOES NOT EXIST");
        }
        else{res.send(result);}
        });
      });
});



app.post('/api/schedule', (req, res) => {
    if((req.body[0].length > 15)){
        res.status(400).send({error: "Schedule Name must be less then 15 characters"});
        return
    }
    con.getConnection(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var course = req.body;
        for(var i=1; i<course.length;i++){
            course[i];
            values = [course[0].toString(), course[i].Name.toString(), course[i].Description.toString(), course[i].Number.toString(), 
            course[i].Component.toString(), course[i].Section.toString(), course[i].Days.toString(), course[i].start.toString(), course[i].end.toString()];
            con.query(" INSERT INTO `Schedule` (ScheduleName, Subject, Description, Course, Component, Section, Days, StartTime, EndTime) VALUES (?)",[values], function (err, result) {
            if (err) throw err;
            });
        }
      });
    res.send(req.body);
});

app.get('/api/scheduleList', (req, res) => {
    con.getConnection(function(err, connection) {
        if (err) throw err;
        console.log("Connected!");
        connection.query(" SELECT * FROM `Schedule`",function (err, result) {
        connection.release();
        if (err) throw err;
        var scheduleList=[], size = [], final=[],prev;
        if(!result.length){
            res.status(404).send("SCHEDULE DOES NOT EXIST");
        }
        else{
            for(var i=0; i< result.length;i++){
                if(result[i].ScheduleName !== prev)
                {
                    scheduleList.push(result[i]);
                    size.push(1);
                }else{
                    size[size.length-1]++;
                }
                prev =result[i].ScheduleName;
            }
            for(var j=0; j<size.length;j++){
                final.push({
                    "ScheduleName": scheduleList[j].ScheduleName,
                    "NumberCourses": size[j]
                })
            }
            res.send(final);
        }
        });
      });
});

//PORT
const port = process.env.PORT || 3001;
console.log('The value of PORT is:', process.env.PORT);
app.listen(port, () => console.log(`Listening on ${port}`));