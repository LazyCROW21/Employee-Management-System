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
}

module.exports = DeptDesgService;
