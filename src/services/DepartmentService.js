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
    static addDepartment(data) {
        return fetch(base_url+'department', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
    static updateDepartment(id, data) {
        return fetch(base_url+'department/'+id, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
    static deleteDepartment(id) {
        return fetch(base_url+'department/'+id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
    }
}

module.exports = DepartmentService;
