let employees = [
    {
        id: 1, 
        name: 'Arjun',
        department: 'HR',
        salary: 30000
    },
    {
        id: 2, 
        name: 'Banu',
        department: 'Development',
        salary: 40000
    },
    {
        id: 3, 
        name: 'John',
        department: 'Testing',
        salary: 25000
    },
    {
        id: 4, 
        name: 'Priya',
        department: 'Development',
        salary: 45000
    }
];

const getAllEmployees = () => {
    return employees;
}

const createEmployee = (employeeData) => {
    employees.push(employeeData);
    return employeeData;
}

const updateEmployee = (id, updateData) => {
    const employeeIndex = employees.findIndex(employee => employee.id === id);
    if(employeeIndex === -1) {
        return null;
    }
    employees[employeeIndex] = {
        ...employees[employeeIndex],
        ...updateData
    }
    return employees[employeeIndex];
}

const deleteEmployee = (id) => {
    const employeeExists = employees.find(employee => employee.id === id);
    if(!employeeExists) {
        console.log("Employee not exisis");
        
        return null;
    }
    employees = employees.filter(employee =>  employee.id !== id);
    return employeeExists;
}

module.exports = {
    getAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
};