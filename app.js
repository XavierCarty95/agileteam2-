const express = require('express');
const app = express() 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json())

const Employee = require("./models/employees")


mongoose.connect('mongodb://localhost/employee' , { useNewUrlParser: true })
const db = global.connection

app.get('/', function(req,res){
    res.send('Please use /api ')
}); 

app.get('/api/employees', function(req,res){
    Employee.getEmployees(function(error, employee){
        if(error){
            throw error; 
            
        }
        res.json(employee)
    })
    
})

app.post('/api/employees', function(req,res){
    var employee = req.body;
    
    Employee.addEmployees(employee,function(error, employee){
        if(error){
            throw error; 
            
        }
        res.json(employee)
    })
    
});


app.put('/api/employees/:_id', function(req,res){
    var id = req.params._id;
    var employee = req.body;
    
    Employee.updateEmployee(id, employee, {}, function(error, employee){
        if(error){
            throw error; 
            
        }
        res.json(employee)
    })
    
});
app.listen(process.env.PORT, process.env.IP)
console.log('Running on my port')