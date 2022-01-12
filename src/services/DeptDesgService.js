const base_url = 'http://localhost:5000/api/';

class DeptDesgService {
    static getAllDeptDesg() {
        return fetch(base_url+'deptdesg', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        });
    }
    static addDeptDesg(data) {
        return fetch(base_url+'deptdesg', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
    static updateDeptDesg(id, data) {
        return fetch(base_url+'deptdesg/'+id, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
    static deleteDeptDesg(id) {
        return fetch(base_url+'deptdesg/'+id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-type': 'application/json'
            }
        });
    }
}

module.exports = DeptDesgService;
