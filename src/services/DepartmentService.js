const base_url = 'http://localhost:5000/api/';

class DepartmentService {
    static getAllDepartments() {
        return fetch(base_url+'department', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        });
    }
}

module.exports = DepartmentService;
