const base_url = 'http://localhost:5000/api/';

class EmployeeService {
    static getAllEmployees() {
        return fetch(base_url+'employee', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-type': 'application/json'
            }
        });
    }
    static addEmployee(data) {
        return fetch(base_url+'employee', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
    static updateEmployee(id, data) {
        return fetch(base_url+'employee/'+id, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
    static deleteEmployee(id) {
        return fetch(base_url+'employee/'+id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-type': 'application/json'
            }
        });
    }
}

module.exports = EmployeeService;
