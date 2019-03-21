var mongoose = require('mongoose'); 

//employee Schema
var employeeSchema = mongoose.Schema({
    name: {
        type: String
    },
    id: {
        type: String,
        required:[true, 'ID field is required']
    },
    timeIn: {
        type: Date,
        default: Date.now
    },
    timeOut: {
        type: Date,
        default: Date.now()
    }
});

var Employee = module.exports = mongoose.model("Employee" , employeeSchema)

module.exports.getEmployees = function(callback, limit){
    Employee.find(callback).limit(limit);
    
}

module.exports.getEmployeesId = function(id, callback){
    Employee.findById(id,callback);
}

module.exports.addEmployees = function(employee , callback){
    Employee.create( employee, callback)
}

module.exports.updateEmployee = function(id, employee , options , callback ){
    var query = {_id: id};
    var update = { 
        name: employee.name,
        timeIn : employee.timeIn,
        timeOut : employee.timeOut, 
        id : employee.id
    }
    Employee.findOneAndUpdate(query , update , options,  callback)
    
}