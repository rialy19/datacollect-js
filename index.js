function Employee(name, id, position) {
    this.name = name;
    this.id = id;
    this.position = position;
}

function Department(name) {
    this.name = name;
    this.employees = [];

    this.addEmployee = function(employee) {
        this.employees.push(employee);
    };

    this.findEmployeeById = function(id) {
        for (var i = 0; i < this.employees.length; i++) {
            if (this.employees[i].id === id) {
                return this.employees[i];
            }
        }
        return null;
    };
}

var department = new Department("Engineering");

var employee1 = new Employee("John Doe", 101, "Software Engineer");
var employee2 = new Employee("Jane Smith", 102, "UI/UX Designer");

department.addEmployee(employee1);
department.addEmployee(employee2);

console.log("Employees in " + department.name + " department:");
department.employees.forEach(function(employee) {
    console.log("Name: " + employee.name + ", ID: " + employee.id + ", Position: " + employee.position);
});

var foundEmployee = department.findEmployeeById(101);
if (foundEmployee) {
    console.log("Found employee: " + foundEmployee.name);
} else {
    console.log("Employee not found.");
}