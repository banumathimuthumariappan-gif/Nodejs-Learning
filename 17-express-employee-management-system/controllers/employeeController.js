const { getAllEmployees, createEmployee, updateEmployee, deleteEmployee } = require('../services/employeeService');

const getEmployees = (request, response) => {
    const employees = getAllEmployees();

    response.status(200).json({
        success: true,
        message: 'Employees fetched successfully',
        data: employees
    });
};

const addEmployee = (request, response) => {
    console.log(request.body);
    const employeeData = request.body;
    const newEmployee = createEmployee(employeeData);
    response.status(201).json({
        success: true,
        message: 'Employee created successfully',
        data: newEmployee
    });
}

const editEmployee = (request, response) => {
    const id = parseInt(request.params.id);
    const updateData = request.body;
    const updatedEmployee = updateEmployee(id, updateData);

    if(!updatedEmployee) {
        return response.status(404).json({
            success: false,
            message: 'Employee not found'
        });
    }
    response.status(200).json({
        success: true,
        message: 'Employee updated successfully',
        data: updatedEmployee
    });
}

const removeEmployee = (request, response) => {
    console.log("Remove employee in controller");
    
    const id = parseInt(request.params.id);
    const deletedEmployee = deleteEmployee(id);
    console.log(deletedEmployee);
    

    if(!deletedEmployee) {
        return response.status(404).json({
            success: false,
            message: 'Unable to delete employee',
        });
    }
    response.status(200).json({
        success: true,
        message: 'Employee deleted successfully',
        data: deletedEmployee
    });
}

module.exports = {
    getEmployees,
    addEmployee,
    editEmployee,
    removeEmployee
}